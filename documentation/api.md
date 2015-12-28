# Group Bookmarks
Group of all bookmark-related resources.

## Bookmark [/bookmarks{?tag}]
Actions related to the movies as a Group

### Get All Bookmarks [GET]
Returns a list of all bookmarks

+ Parameters
    + tag (string, optional) - Comma separated list of tags to filter the response

+ Response 200 (application/json)
    + Attributes (Success Response)
        + data (Bookmark Collection)

    + Headers

            Location: /bookmarks

### Create Bookmark [POST]
Creates a new Bookmark

+ Request (application/json)
    + Attributes (object, required)
        + id: 1 (number, required)
        + title: PXL Bros (string)
        + url: pxlbros.com (string, required)
        + thumbnail: filename.jpg (string)
        + description: PXL BROS is a full-service digital agency... (string)
        + tags: `[0, 2, 3]` (object)
        + created_by: user_id (number)

+ Response 201 (application/json)
    + Attributes (Success Response)
        + data (object)
            + bookmarks (array[Bookmark])
    + Headers

            Location: /bookmarks/1

## Bookmark [/bookmarks/{bookmark_id}]
Actions related to a specific bookmark represented by ID bookmark_id.

+ Parameters
    + bookmark_id: (number, required) - Unique identifier for a bookmark in the form of an integer

### Retrieve a Bookmark [GET]
Retrieves bookmark details for the given ID.

+ Response 200 (application/json)
    + Attributes (Success Response)
        + data (object)
            + bookmarks (array[Bookmark])

+ Response 404

### Update Bookmark [PUT]
Updates an existing bookmark

+ Request Update JSON Message (application/json)
    + Attributes (object)
        + title: PXL Bros Website (string)
        + url: pxlbros.com (string, required)
        + thumbnail: filename2.jpg (string)
        + description: PXL BROS is a full-service digital agency... (string)
        + tags: `[1, 4]` (object)

+ Response 200 (application/json)
    + Attributes (Success Response)
        + data (object)
            + bookmarks (array[Bookmark])

### Delete Bookmark [DELETE]
Deletes an existing bookmark permanently.

+ Response 204


# Group Tags
Group of all tag-related resources

## Tags [/tags]

### Get Tags [GET]

+ Response 200 (application/json)
    + Attributes (Success Response)
        + data (object)
            + tags (array[Tags])

### Create Tag [POST]

+ Request (application/json)
    + Attributes (object)
        + name: node_api (string) - tag name, multiple words separated by underscores

+ Response 201 (application/json)
    + Attributes (Success Response)
        + data (object)
            + tags (array[Tag])
    + Headers

            Location: /tags/1

## Tag [/tagged/{tag_id}]

+ Parameters
    + tag_id (number) - ID of the Tag in the form of an integer.

### Get Tag [GET]

+ Response 200 (application/json)
    + Attributes (Success Response)
        + data (object)
            + tags (array[Tag])

### Update Tag [PUT]
Updates the tag specified by {tag_id}

+ Request (application/json)
    + Attributes (Success Response)
        + name: JavaScript

+ Response 200 (application/json)
    + Attributes (Success Response)
        + data (object)
            + tags (array[Tag])

### Delete Tag [DELETE]

+ Response 204


# Group Users
Group of all user-related resources

## Users

### Get Users [GET]

+ Response 200 (application/json)
    + Attributes (Success Response)
        + data (object)
            + users (array[Users])

+ Response 404

### Create User [POST]

+ Request (application/json)
    + Attributes (object)
        + id: user_id (number) - ID of the User in the form of an integer.
        + username: sarahb (string) - Name of User in the form of a string with no spaces or special characters
        + avatar: filename.jpg (string)
        + created_at: 1439839581 (number) - Timestamp of when the User was created

## User [/users/{user_id}]

+ Parameters
    + user_id (number) - ID of user in the form of an integer.

### Get User [GET]

+ Response 200 (application/json)
    + Attributes (Success Response)
        + data (object)
            + users (array[User])

### Update User [PUT]
Updates the user specified by {user_id}

+ Request (application/json)
    + Attributes (Success Response)
        + username: sarahbostwick
        + avatar: filename2.jpg (string)

+ Response 200 (application/json)
    + Attributes (Success Response)
        + data (object)
            + users (array[user])

### Delete User [DELETE]
Deletes user permanently

+ Response 204


# Data Structure

## Success Response (object)
+ status: success (string)

## Not Found Response (object)

## Bookmark (object)
+ id: 1 (number)
+ title: PXL Bros Website (string)
+ url: `http://pxlbros.com` (string)
+ thumbnail: filename.jpg (string)
+ description: PXL BROS is a full-service digital agency... (string)
+ tags (array)
    + 2 (number)
    + 5 (number)
    + 8 (number)
+ created_by: user_id (number)

## Bookmark Collection (object)
+ bookmarks (array[Bookmark]) - An array of bookmark objects

## Bookmark Collection Response (object)
+ status: success (string)
+ data (Bookmark Collection)

## Tag (object)
+ id: 1 (number)
+ name: JavaScript (string)

## Bookmark Tag (object)
+ id: 8291 (number)
+ tag: 1 (number)
+ bookmark: 55 (number)
+ links (array)
    + link (object)
        + rel: tag (string)
        + href: /tags/8298
    + link (object)
        + rel: bookmark (string)
        + href: /boomarks/55

## User (object)
+ id: 1 (number)
+ username: sarahbostwick (string)
+ avatar: filename.jpg (string)
+ created_at: 1439839581 (number)

## Bookmark User (object)
+ id: 436 (number)
+ user: 1 (number)
+ bookmark: 55 (number)
+ links (array)
    + link (object)
        + rel: user (string)
        + href: /users/1 (string)
    + link (object)
        + rel: bookmark (string)
        + href: /bookmarks/55 (string)
