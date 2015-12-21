# Group Bookmarks
Group of all bookmark-related resources.

## Bookmark [/bookmark]

### Retrieve a Bookmark [GET]
+ Request JSON Message

    + Headers

        Accept: application/json

+ Response 200 (application/json)

    + Headers

        X-My-Bookmark-Header: 42

    + Body

        {
            "id": 1,
            "bookmark": "Hello World!"
        }

### Update a Bookmark [PUT]

+ Request Update JSON Message (application/json)

        { "bookmark": "The bookmark info"}

+ Response 204

## All My Bookmarks [/bookmarks{?limit}]
A resource representing all of my bookmarks in the system

### Retrieve all Bookmarks [GET]

+ Parameters

    + limit (number, optional) - The maximum number of results to return.
        + Default: `20`

+ Response 200 (application/json)

        [
            {
                "id": 1,
                "bookmark": "Hello World!"
            },
            {
                "id": 2,
                "bookmark": "The second bookmark."
            },
            {
                "id": 2,
                "bookmark": "And a third one."
            }
        ]


# Group Users
Group of all user-related resources

# Group Categories
Group of all category-related resources
