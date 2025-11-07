import type { Response } from 'express';
import { CvService } from './cv.service';
export declare class CvController {
    private readonly cvService;
    constructor(cvService: CvService);
    downloadCv(res: Response): void;
}
