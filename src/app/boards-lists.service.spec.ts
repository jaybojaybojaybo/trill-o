import { TestBed, inject } from '@angular/core/testing';

import { BoardsListsService } from './boards-lists.service';

describe('BoardsListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardsListsService]
    });
  });

  it('should be created', inject([BoardsListsService], (service: BoardsListsService) => {
    expect(service).toBeTruthy();
  }));
});
