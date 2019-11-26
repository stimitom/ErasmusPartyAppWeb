import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Observable,of } from 'rxjs';
import { switchMap } from 'rxjs/operators'; 
import { auth } from 'firebase';

export class AuthService{ 
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

    signInEmail(){
        this.afAuth.auth.signInWithEmailAndPassword('t.testaccount@hotmail.com','password').catch(function(error) {
            // Handle Errors here.
        })
    }
}
