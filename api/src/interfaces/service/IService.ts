export interface IService<T> {
  execute(): T;
  execute(entity: T): T;
}
