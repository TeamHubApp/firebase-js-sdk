/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { storage } from 'firebase/app';
import { Observable } from 'rxjs';
export declare function fromTask(task: storage.UploadTask): Observable<storage.UploadTaskSnapshot>;
export declare function getDownloadURL(ref: storage.Reference): Observable<any>;
export declare function getMetadata(ref: storage.Reference): Observable<any>;
export declare function put(ref: storage.Reference, data: any, metadata?: storage.UploadMetadata): Observable<storage.UploadTaskSnapshot>;
export declare function putString(ref: storage.Reference, data: string, format?: storage.StringFormat, metadata?: storage.UploadMetadata): Observable<storage.UploadTaskSnapshot>;
export declare function percentage(task: storage.UploadTask): Observable<{
    progress: number;
    snapshot: storage.UploadTaskSnapshot;
}>;
