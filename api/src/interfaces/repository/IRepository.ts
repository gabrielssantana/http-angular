export interface IRepository<T> {
  createAsync(entity: T): Promise<T>;
  updateAsync(entity: T): Promise<T>;
  deleteAsync(entity: T): Promise<T>;
  listAsync(): Promise<T[]>;
  findAsync(id: number): Promise<T | null>;
}
