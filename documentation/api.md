# Group Bookmarks
Group of all bookmark-related resources.

## Bookmark [/bookmarks/{id}]
A Bookmark contains information about a saved link including a title, URL, description, thumbnail, and categories.

+ Parameters
    + id (id)
    The ID of the desired bookmark.

+ Attributes (Bookmark Base)

    + id: 1 (id, required)
    + url: `http://pxlbros.com` (string, required)

### Retrieve a Bookmark [GET]
Retrieves a bookmark with the given ID.

+ Response 200 (application/json)
    + Attributes (Bookmark)


### Update a Bookmark [PUT]
Updates an existing bookmark

+ Request Update JSON Message (application/json)

+ Response 204 (application/json)

    +Attributes (Bookmark)


### Create a Bookmark [POST]
Creates a new Bookmark

+ Attributes (Bookmark Base)

+ Request (application/json)

+ Response 200 (application/json)

    + Body
            {
                "id": 1,
                "title": "This is a title",
                "url": "`http://pxlbros.com`"
                "description": "A description about this link."
                "tags": [
                    "todo",
                    "home"
                ]
            }
    + Schema
            {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "title": {
                        "type": "string"
                    },
                    "url": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "tags": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }


## All My Bookmarks [/bookmarks{?limit}]
A resource representing all of my bookmarks in the system

+ Attributes (array[bookmark])

### List all Bookmarks [GET]
Returns a list of all your bookmarks

+ Parameters

    + limit (number, optional) - The maximum number of results to return.
        + Default: `20`

+ Response 200 (application/json)

    + Attributes (Bookmarks)


# Data Structures
## Bookmark Base (object)

+ title: PXL Bros (string)
+ thumbnail: /assets/images/pxlbros.jpg (image)
+ description: PXL BROS is a full-service digital agency... (string)
+ categories: `[0, 2, 3]` (object)


# Group Users
Group of all user-related resources

# Group Categories
Group of all category-related resources
