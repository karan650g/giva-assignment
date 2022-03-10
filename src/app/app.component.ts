import { Component } from '@angular/core';
import { AngularFirestore } from  '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'giva-assignment';

  constructor(private  store: AngularFirestore){}
  ngOnInit(){
    this.getAll();
  }
  dataSource:any;
  getAll(){
    this.store.collection('users').snapshotChanges().subscribe((response) => {
      this.dataSource = response.map(item =>
        Object.assign({id : item.payload.doc.id}, item.payload.doc.data()))
        console.log(this.dataSource);
    })
  }
}
