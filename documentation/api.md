# Group Bookmarks
Group of all bookmark-related resources.

## Bookmark [/bookmarks/{id}]
A Bookmark contains information about a saved link including a title, URL, description, thumbnail, and categories.

+ Parameters
    + id (id)
    The ID of the desired bookmark.

+ Attributes (object)

    + id: 1 (id, required)
    + title: PXL Bros (string)
    + url: `http://pxlbros.com` (string, required)
    + thumbnail: /assets/images/pxlbros.jpg (image)
    + description: PXL BROS is a full-service digital agency... (string)
    + categories: `[0, 2, 3]` (object)

### Retrieve a Bookmark [GET]
Retrieves a bookmark with the given ID.

+ Request JSON Message

    + Headers

            Accept: application/json

+ Response 200 (application/json)


    + Headers

            X-My-Bookmark-Header: 42

    + Body

            {
                "id": 1,
                "title": "PXL Bros",
                "url": "http://pxlbros.com",
                "thumbnail": "/assets/images/pxlbros.jpg",
                "description": "PXL BROS is a full-service digital agency specializing in web, mobile, social media, and application development.",
                "categories": [0, 2, 3]
            }


### Update a Bookmark [PUT]

+ Request Update JSON Message (application/json)

        { "bookmark": "The bookmark info"}

+ Response 204

### Create a Bookmark [POST]
Creates a new Bookmark

+ Attributes (object)

    + title: PXL Bros (string)
    + url: `http://pxlbros.com` (string, required)
    + thumbnail: /assets/images/pxlbros.jpg (image)
    + description: PXL BROS is a full-service digital agency... (string)
    + categories: `[0, 2, 3]` (object)

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
                "title": "PXL Bros",
                "url": "http://pxlbros.com",
                "thumbnail": "/assets/images/pxlbros.jpg",
                "description": "PXL BROS is a full-service digital agency specializing in web, mobile, social media, and application development.",
                "categories": [0, 2, 3]
            },
            {
                "id": 2,
                "title": "Sarah Bostwick artwork",
                "url": "http://sarahbostwick.com",
                "thumbnail": "/assets/images/sarahbostwick.jpg",
                "description": "Portfolio site of relief sculptures by Los Angeles based artist Sarah Bostwick",
                "categories": [1]
            },
            {
                "id": 3,
                "title": "The Property",
                "url": "http://theproperty.gallery",
                "thumbnail": "/assets/images/sarahbostwick.jpg",
                "description": "Los Angeles artist run gallery project 2014-2015",
                "categories": [1, 2]
            }
        ]


# Group Users
Group of all user-related resources

# Group Categories
Group of all category-related resources
