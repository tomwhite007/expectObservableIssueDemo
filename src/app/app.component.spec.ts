import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { TestScheduler } from 'rxjs/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('marbles tests', () => {
    it('should pass because of correct syntax', () => {
      const testScheduler = new TestScheduler((actual, expected) => {});
      testScheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const s1 = cold('--a|', { a: 'x' });

        expectObservable(s1).toBe('--a|', { a: 'x' });
      });
    });

    it('should fail because of incorrect expectation', () => {
      const testScheduler = new TestScheduler((actual, expected) => {});
      testScheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const s1 = cold('--a|', { a: 'x' });

        expectObservable(s1).toBe('--a|', { a: 'y' });
      });
    });

    it('should fail because of bad syntax', () => {
      const testScheduler = new TestScheduler((actual, expected) => {});
      testScheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const s1 = cold('--a--b|', { a: 'x', b: 'y' });

        expectObservable(s1).toBe('xxx', 0);
      });
    });
  });
});
