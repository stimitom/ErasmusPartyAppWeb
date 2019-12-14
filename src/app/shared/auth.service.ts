import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ 
    providedIn: 'root'
})
export class AuthService {

    private eventAuthError = new BehaviorSubject<string>(""); 
    eventAuthError$ = this.eventAuthError.asObservable(); 
    newUser: any;

    constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }


    createUser(user) {
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(userCredential => {
                this.newUser = user;
                console.log(userCredential);

                userCredential.user.updateProfile({
                    displayName: user.username
                });

                this.insertUserData(userCredential)
                    .then(() => { 
                        this.router.navigate(['/home']);
                    });
            })
            .catch( error => { 
                this.eventAuthError.next(error);
            })
    }

    insertUserData(userCredential: firebase.auth.UserCredential) {
        return this.db.doc(`users/${userCredential.user.uid}`).set({
            userid: `${userCredential.user.uid}`,
            email: this.newUser.email,
            username: this.newUser.username,
            nationality: this.newUser.nationality,
            city: this.newUser.city
        })
    }
}



/*
  user$: Observable<any>;

    constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router){
        this.user$ = this.afAuth.authState.pipe(
            switchMap( (user) => {
                if(user){
                    return this.db.doc(`users/${user.uid}`).valueChanges();
                }else{
                    return of(null);
                }
            })
        );
    }

    signInEmail(user){
        this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password).catch(function(error) {
            // Handle Errors here.
        })
    }
 */