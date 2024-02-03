import { TestBed } from '@angular/core/testing';

import { MantraUiService } from './mantra-ui.service';

describe('MantraUiService', () => {
  let service: MantraUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantraUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
