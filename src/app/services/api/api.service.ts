import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  //========================== Users=========================


 

  //read One 
  getUser(uid) {
    return this.afs.doc('users/' + uid).valueChanges();
  }
  //Read All
  getUSers() {
    return this.afs.collection('users').snapshotChanges();
  }

  //Delete 
  deleteUser(uid) {

    return this.afs.doc('users/' + uid).delete();
  }
    //UPDATE 
  // updateUser(uid, data) {
  //   return this.afs.doc('users/' + uid).update(data);
  // }
   // createUser(data) {
  //   return this.afs.collection('users').add(data);
  // }
//=========================================Product=================================================
  createProduct(data) {
    return this.afs.collection('products').add(data);
  }

  //read One 
  // getProduct(uid) {
  //   return this.afs.doc('products/' + uid).valueChanges();
  // }
  getproduct(uid){
    return this.afs.doc('products/'+uid).get();
  }
  //Read All
  getProducts() {
    return this.afs.collection('products',ref=>ref.orderBy('quantity','desc')).snapshotChanges();
  }
  //UPDATE 
    updateProduct(uid, data) {
    return this.afs.doc('products/' + uid).update(data);
  }
  //Delete 
  deleteProduct(uid) {

    return this.afs.doc('products/' + uid).delete();

  }
  //=================================Bills=========================
  createBill(data) {
    return this.afs.collection('products').add(data);
  }

  //read One 
  // getBill(uid) {
  //   return this.afs.doc('products/' + uid).valueChanges();
  // }
  getBill(uid){
    return this.afs.doc('bills/'+uid).get();
  }
  //Read All
  getBills() {
    return this.afs.collection('bills',ref=>ref.orderBy('quantity','desc')).snapshotChanges();
  }
  //UPDATE 
    updateBill(uid, data) {
    return this.afs.doc('bills/' + uid).update(data);
  }
  //Delete 
  deleteBill(uid) {

    return this.afs.doc('bills/' + uid).delete();

  }

}
