import { Query, Mutation, Resolver, Arg } from 'type-graphql';

import { Player } from '../entity/Palyer';

@Resolver()
export class PlayerResolver {
  @Query(() => [Player])
  players() {
    return Player.find();
  }

  @Mutation(() => Player)
  async createPlayer(
    @Arg('name') name: string,
    @Arg('year') year: number,
    @Arg('photoUrl') photoUrl: string,
    @Arg('bio') bio: string,
    @Arg('votes') votes: number,
  ) {
    return await Player.insert({ name, year, photoUrl, bio, votes });
  }

  @Mutation(() => Player)
  async updatePlayer(
    @Arg('id') id: number,
    @Arg('name') name: string,
    @Arg('year') year: number,
    @Arg('photoUrl') photoUrl: string,
    @Arg('bio') bio: string,
    @Arg('votes') votes: number,
  ) {
    return await Player.update({ id }, { name, year, photoUrl, bio, votes });
  }

  @Mutation(() => Boolean)
  async deletePlayer(
    @Arg('id') id: number,
  ) {
    await Player.delete({ id });
    return true;
  }
}
