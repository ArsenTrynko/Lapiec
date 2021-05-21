import { Component, OnInit } from '@angular/core';
import { IDiscount } from 'src/app/shared/interfaces/discount.interface';
import { Discount } from 'src/app/shared/models/discount.model';
import { DiscountService } from 'src/app/shared/services/discount.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin-discount',
  templateUrl: './admin-discount.component.html',
  styleUrls: ['./admin-discount.component.scss']
})
export class AdminDiscountComponent implements OnInit {

  adminDiscounts: Array<IDiscount> = [];
  name: string;
  discountID: number = null;
  description: string;
  image: string;
  imageDetail: string;
  editStatus: boolean;
  pathToImage: string;
  uploadPercent: Observable<number>;
  constructor(private discService: DiscountService, private storage: AngularFireStorage) { }


  ngOnInit(): void {
    this.getAdminDiscounts();
  }

  getAdminDiscounts(): void {
    // this.adminDiscounts = this.discService.getDiscount();
    this.discService.getJSONDiscount().subscribe(
      data => {
        this.adminDiscounts = data;
      },
      err => console.log(err)
    );
  }





  addDiscount(): void {
    let newDisc = new Discount(this.name, this.description, this.image);

    this.discService.postJSONDiscount(newDisc).subscribe(
      () => {
        this.getAdminDiscounts();
      },
      err => console.log(err)
    )

    this.resetForm();
    this.pathToImage = '';

  }

  deleteDiscount(disc: IDiscount): void {
    if (confirm('Are you sure?')) {
      this.discService.deleteJSONDiscount(disc.id).subscribe(
        () => {
          this.getAdminDiscounts();
        },
        err => console.log(err)
      );

      let fileRef = this.storage.refFromURL(disc.image);

      fileRef.delete().subscribe(
        () => {},
        err => console.log(err)
        
      );

    }

  }

  editDiscount(disc: IDiscount): void {
    this.name = disc.name;
    this.description = disc.description;
    this.discountID = disc.id;
    this.editStatus = true;
  }

  private resetForm() {
    this.name = '';
    this.description = '';
  }

  uploadFile(event, detail: boolean): void {
    const file = event.target.files[0];
    console.log(file);

    const filePath = `images/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.then(image => {
      this.storage.ref(`images/${image.metadata.name}`)
        .getDownloadURL()
        .subscribe(
          url => {
            if (detail == true) {
              this.imageDetail = url;
            }
            else {
              this.image = url;
            }

          }
        )
    })
  }

}
