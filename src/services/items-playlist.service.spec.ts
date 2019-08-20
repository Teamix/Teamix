import { TestBed } from '@angular/core/testing';

import { ItemsPlaylistService } from './items-playlist.service';

describe('ItemsPlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsPlaylistService = TestBed.get(ItemsPlaylistService);
    expect(service).toBeTruthy();
  });
});
