import {DefaultCrudRepository} from '@loopback/repository';
import {Todos, TodosRelations} from '../models';
import {TodosdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TodosRepository extends DefaultCrudRepository<
  Todos,
  typeof Todos.prototype.todoID,
  TodosRelations
> {
  constructor(
    @inject('datasources.todosdb') dataSource: TodosdbDataSource,
  ) {
    super(Todos, dataSource);
  }
}
