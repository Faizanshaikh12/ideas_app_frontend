import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthDto, AuthType} from '../models/auth';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api: string = environment.api_server + '/auth';

  constructor(private http: HttpClient) {
  }

  private auth(authType: AuthType, data: AuthDto): Observable<User> {
    return this.http.post<User>(`${this.api}/${authType}`, data);
  }

  login(data: AuthDto): Observable<User> {
    return this.auth('login', data);
  }

  register(data: AuthDto): Observable<User> {
    return this.auth('register', data);
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
