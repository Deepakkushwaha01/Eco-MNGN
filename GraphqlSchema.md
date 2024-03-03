# GraphQl Architecture for Schema

it's is neccessary to define graphql schema for retirve data from database or for mutation also
graphql ke liye uska schema define karna padta hai

![alt text](zOLdReadme/Untitled-2024-03-03-1744.png)

# Schema define ke tarika

jab hum graphql m query ya mutation karte hai to hume chahiye rahta hai return value kya hogi aur input (jo user bhejta hai)

query - hume bus return value chahiye rahti hai

mutation - haame return and user input cahiye rahta hai

Note: - jab hume data mangwana hota hai server se to hum query karwate hai data ke basis ya saara data mangwate hai to jab hum
data bhejta hai user input to usko GraphQLInputObjectType ke ander fields m dalte hai ki kon kon si field ka data user se le rahe hai and jab hum waha return data mangwate hai to kon kon sa data hame chahiye use hum GraphQLObjectType m daal debge to hume return m wahi data milega

```
export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString }
    }
  });
```

```
  export const UserInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        password: {type: new GraphQLNonNull(GraphQLString)},
        Cpassword: {type: new GraphQLNonNull(GraphQLString)},
        account_type: {type: new GraphQLNonNull(GraphQLString)},
      }
  })
```

inka use hum user ki query ya mutation dono m use kar sakhte hai

------------------------------------------------------ One More to Achive that -----------------------------------------------------

   ```
  type Query {
      articleList: [Article] # Assuming ArticleListType returns a list of articles
    }

    type Mutation {
      articleCreate: Article
      authorCreate: Author
      DeleteArticle: Article
    }

    type Article {
      # Define Article type fields here
    }

    type Author {
      # Define Author type fields here
    } 

    ```
