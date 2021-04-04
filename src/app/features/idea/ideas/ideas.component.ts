import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Idea} from '../../../models/idea';
import {User} from '../../../models/user';
import {Store} from '@ngrx/store';
import {AppState, LoadIdeas} from '../state';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})

export class IdeasComponent implements OnInit {
  ideas: Observable<Idea[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadIdeas());
    this.ideas = this.store
      .select(state => state.ideas.ideas)
      .pipe(this.toArray());
  }

  private toArray() {
    return map(ideas => Object.keys(ideas).map(id => ideas[id]));

  }
}
