const Mutation = {
	async createItem(parent, args, ctx, info) {
		// TODO check if they are logged in
		// console.log(ctx, '******');
		const Item = await ctx.db.mutation.createItem(
			{
				data: {
					...args,
				},
			},
			info
		);
		return Item;
	},
};

module.exports = Mutation;
