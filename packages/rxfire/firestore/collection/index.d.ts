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
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
/**
 * Return a stream of document changes on a query. These results are not in sort order but in
 * order of occurence.
 * @param query
 */
export declare function collectionChanges(query: firestore.Query, events?: firestore.DocumentChangeType[]): Observable<firestore.DocumentChange[]>;
/**
 * Return a stream of document snapshots on a query. These results are in sort order.
 * @param query
 */
export declare function collection(query: firestore.Query): Observable<firestore.QueryDocumentSnapshot[]>;
/**
 * Return a stream of document changes on a query. These results are in sort order.
 * @param query
 */
export declare function sortedChanges(query: firestore.Query, events?: firestore.DocumentChangeType[]): Observable<firestore.DocumentChange[]>;
/**
 * Create a stream of changes as they occur it time. This method is similar
 * to docChanges() but it collects each event in an array over time.
 */
export declare function auditTrail(query: firestore.Query, events?: firestore.DocumentChangeType[]): Observable<firestore.DocumentChange[]>;
/**
 * Returns a stream of documents mapped to their data payload, and optionally the document ID
 * @param query
 */
export declare function collectionData<T>(query: firestore.Query, idField?: string): Observable<T[]>;
