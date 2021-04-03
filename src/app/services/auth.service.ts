import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthDto, AuthType} from '../models/auth';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api: string = environment.api_server + '/auth';

  constructor(private http: HttpClient) {
  }

  auth(authType: AuthType, data: AuthDto): Observable<User> {
    return this.http.post<User>(`${this.api}/${authType}`, data).pipe(
      mergeMap((user: User) => {
        this.token = user.token;
        return of(user);
      })
    );
  }

  whoami(): Observable<User> {
    return this.http.get<User>(`${this.api}/whoami`, {
      headers: {authorization: `Bearer ${this.token}`}
    });
  }

  get token(): string {
    return localStorage.getItem('idea_token');
  }

  set token(val: string) {
    if (val) {
      localStorage.setItem('idea_token', val);
    } else {
      localStorage.clear();
    }
  }
}
