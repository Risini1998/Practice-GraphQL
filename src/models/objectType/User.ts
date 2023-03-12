import { Field, ObjectType, ID } from 'type-graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field()
  firstName: string

  @Field()
  lastName: string

  // skip overwrite 👇