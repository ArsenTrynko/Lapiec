import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  adminProducts: Array<IProduct> = [];
  name: string;
  discountID: number = null;
  description: string;
  image: string;
  price: string;
  weight: string;
  productCategory: string;
  productCategoryGet: string;
  editStatus: boolean;
  pathToImage: string;
  uploadPercent: Observable<number>;
  LIST: string[] = [
    'Pizza', 'Salats', 'Drinks', 'Deserts'
  ];
  list: string[] = this.LIST;
  activeItem: string;
  constructor(private prodService: ProductService, private storage: AngularFireStorage) { }


  ngOnInit(): void {
    
  }

  getAdminProducts(): void {

    this.prodService.getJSONProduct(this.productCategoryGet).subscribe(
      data => {
        this.adminProducts = data;
      },
      err => console.log(err)
    );
  }

  getProductsBtn(category): void{
    this.productCategoryGet = category;
    this.getAdminProducts();
  }


  onChange(category) {
    this.productCategory = category;
   }

 addProduct(): void {
    let newProd = new Product(this.name, this.description, this.image,this.price,this.weight);
   
      this.prodService.postJSONProduct(newProd,this.productCategory).subscribe(
        () => {
          this.getAdminProducts();
        },
        err => console.log(err)
        )
     
    this.resetForm();
    this.pathToImage = '';
        
  }

  deleteProduct(prod: IProduct): void {
    if (confirm('Are you sure?')) {
      this.prodService.deleteJSONProduct(prod.id,this.productCategoryGet).subscribe(
        () => {
          this.getAdminProducts();
        },
        err => console.log(err)
      );


      let fileRef = this.storage.refFromURL(prod.image);

      fileRef.delete().subscribe(
        () => {},
        err => console.log(err)
        
      );
    }

  }

  editProduct(prod: IProduct): void {
    this.name = prod.name;
    this.description = prod.description;
    this.discountID = prod.id;
    this.editStatus = true;
  }

  private resetForm() {
    this.name = '';
    this.description = '';
    this.price = '';
    this.weight = '';
    
  }
  
  uploadFile(event): void {
    const file = event.target.files[0];
    console.log(file);
    
    const filePath = `images/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    this.uploadPercent = task.percentageChanges();
    task.then(image => {
      this.storage.ref(`images/${image.metadata.name}`)
        .getDownloadURL()
        .subscribe(
          url => {

              this.image = url;
            
          }
        )
    })
  }

  onSelectItem(item: string): void {
    this.activeItem = item;
  }



  

}



