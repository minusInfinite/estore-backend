# estore-backend

A Store REST API built with Express JS, MySQL and Sequelize

## Contents

[Local Installation](#local-installation)
[End Points](#end-points)
[Credits](#credits)

## Local Installation

This projects is configured using Yarn 2 - <https://yarnpkg.com/getting-started>
You may need to run `yarn install` twice to start the project successfully.

You will need to edit the `.env.EXAMPLE` to your local MySQL installation.

Setup the database from the `db` folder. Start MySQLSH and run the schema.sql file.

Once setup you should be able to start the server using `yarn start`.This will confirm if the database has correctly started.

If successful, you can open a new terminal and run `yarn seed` to populate the server with data for testing.

## End Points

[![Postman Documentation link](https://img.shields.io/badge/Docs-View%20in%20Postman-orange)](https://documenter.getpostman.com/view/11790768/U16gP74m)

End points for <https://github.com/minusInfinite/estore-backend>

## Indices

-   [Category](#category)

    -   [Add New](#1-add-new)
    -   [Delete Category](#2-delete-category)
    -   [Get All](#3-get-all)
    -   [Get by ID](#4-get-by-id)
    -   [Update Category](#5-update-category)

-   [Product](#product)

    -   [Add New](#1-add-new-1)
    -   [Delete Product](#2-delete-product)
    -   [Get All](#3-get-all-1)
    -   [Get by ID](#4-get-by-id-1)
    -   [Update Product](#5-update-product)

-   [Tags](#tags)

    -   [Add New](#1-add-new-2)
    -   [Delete Product](#2-delete-product-1)
    -   [Get All](#3-get-all-2)
    -   [Get by ID](#4-get-by-id-2)
    -   [Update Product](#5-update-product-1)

---

## Category

The end points for a completing CRUD actions against the Store's Category API

### 1. Add New

### Add New

Add a New Category to the database. It will provide an ID

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:3001/api/categories/
```

**_Body:_**

```json
{
    "category_name": "mugs"
}
```

**_More example Requests/Responses:_**

#### I. Example Request: Add New

**_Body:_**

```json
{
    "category_name": "mugs"
}
```

#### I. Example Response: Add New

```json
{
    "id": 7,
    "category_name": "mugs"
}
```

**_Status Code:_** 200

### 2. Delete Category

### Delete By ID

Delete a single categories in the database by the ID at the end of the URL.

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: http://localhost:3001/api/categories/9
```

**_More example Requests/Responses:_**

#### I. Example Response: Delete Category

```json
"Deleted 9"
```

**_Status Code:_** 200

### 3. Get All

### Get All

Get all categories in the database and related products.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3001/api/categories/
```

**_More example Requests/Responses:_**

#### I. Example Request: Get All

#### I. Example Response: Get All

```json
[
    {
        "id": 1,
        "category_name": "Jumpers",
        "products": [
            {
                "id": 1,
                "product_name": "Plain T-Shirt",
                "price": 14.99,
                "stock": 14,
                "category_id": 1
            }
        ]
    },
    {
        "id": 2,
        "category_name": "Shorts",
        "products": [
            {
                "id": 5,
                "product_name": "Cargo Shorts",
                "price": 29.99,
                "stock": 22,
                "category_id": 2
            }
        ]
    },
    {
        "id": 3,
        "category_name": "Music",
        "products": [
            {
                "id": 4,
                "product_name": "Top 40 Music Compilation Vinyl Record",
                "price": 12.99,
                "stock": 50,
                "category_id": 3
            }
        ]
    },
    {
        "id": 4,
        "category_name": "Hats",
        "products": [
            {
                "id": 7,
                "product_name": "Basketball Cap",
                "price": 25,
                "stock": 10,
                "category_id": 4
            },
            {
                "id": 3,
                "product_name": "Branded Baseball Hat",
                "price": 22.99,
                "stock": 12,
                "category_id": 4
            }
        ]
    },
    {
        "id": 5,
        "category_name": "Shoes",
        "products": [
            {
                "id": 2,
                "product_name": "Running Sneakers",
                "price": 90,
                "stock": 25,
                "category_id": 5
            }
        ]
    }
]
```

**_Status Code:_** 200

### 4. Get by ID

### Get By ID

Get a single categories in the database and related products by the ID at the end of the URL.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3001/api/categories/1
```

**_More example Requests/Responses:_**

#### I. Example Request: Get by ID

#### I. Example Response: Get by ID

```json
{
    "id": 1,
    "category_name": "Jumpers",
    "products": [
        {
            "id": 1,
            "product_name": "Plain T-Shirt",
            "price": 14.99,
            "stock": 14,
            "category_id": 1
        }
    ]
}
```

**_Status Code:_** 200

### 5. Update Category

### Update By ID

Update a single categories in the database by the ID at the end of the URL.

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: http://localhost:3001/api/categories/7
```

**_Body:_**

```json
{
    "category_name": "Jumpers"
}
```

**_More example Requests/Responses:_**

#### I. Example Request: Update Category

**_Body:_**

```json
{
    "category_name": "Jumpers"
}
```

#### I. Example Response: Update Category

```json
{
    "message": "Jumpers Updated"
}
```

**_Status Code:_** 202

## Product

### 1. Add New

### Add New

Add a New Product to the database, while options you can provide a category ID and Tag IDs in an Array.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:3001/api/products/
```

**_Body:_**

```json
{
    "product_name": "Basketball Cap",
    "price": 25.0,
    "stock": 10,
    "category_id": 4,
    "tagIds": [5]
}
```

**_More example Requests/Responses:_**

#### I. Example Request: Add New

**_Body:_**

```json
{
    "product_name": "Basketball Cap",
    "price": 25.0,
    "stock": 10,
    "category_id": 4,
    "tagIds": [5]
}
```

#### I. Example Response: Add New

```json
[
    {
        "id": 15,
        "productId": 8,
        "tagId": 5
    }
]
```

**_Status Code:_** 200

### 2. Delete Product

### Delete By ID

Delete a single Product in the database by the ID at the end of the URL.

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: http://localhost:3001/api/products/9
```

**_More example Requests/Responses:_**

#### I. Example Request: Delete Product

#### I. Example Response: Delete Product

```json
"Deleted 9"
```

**_Status Code:_** 200

### 3. Get All

### Get All

Get all Products in the database and related categories and tags

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3001/api/products/
```

**_More example Requests/Responses:_**

#### I. Example Request: Get All

#### I. Example Response: Get All

```json
[
    {
        "id": 1,
        "product_name": "Plain T-Shirt",
        "price": 14.99,
        "stock": 14,
        "category_id": 1,
        "category": {
            "id": 1,
            "category_name": "Jumpers"
        },
        "tags": [
            {
                "id": 6,
                "tag_name": "white",
                "product_tag": {
                    "id": 1,
                    "product_id": 1,
                    "tag_id": 6,
                    "productId": 1,
                    "tagId": 6
                }
            },
            {
                "id": 7,
                "tag_name": "gold",
                "product_tag": {
                    "id": 2,
                    "product_id": 1,
                    "tag_id": 7,
                    "productId": 1,
                    "tagId": 7
                }
            },
            {
                "id": 8,
                "tag_name": "pop culture",
                "product_tag": {
                    "id": 3,
                    "product_id": 1,
                    "tag_id": 8,
                    "productId": 1,
                    "tagId": 8
                }
            }
        ]
    },
    {
        "id": 2,
        "product_name": "Running Sneakers",
        "price": 90,
        "stock": 25,
        "category_id": 5,
        "category": {
            "id": 5,
            "category_name": "Shoes"
        },
        "tags": [
            {
                "id": 6,
                "tag_name": "white",
                "product_tag": {
                    "id": 4,
                    "product_id": 2,
                    "tag_id": 6,
                    "productId": 2,
                    "tagId": 6
                }
            }
        ]
    },
    {
        "id": 3,
        "product_name": "Branded Baseball Hat",
        "price": 22.99,
        "stock": 12,
        "category_id": 4,
        "category": {
            "id": 4,
            "category_name": "Hats"
        },
        "tags": [
            {
                "id": 1,
                "tag_name": "rock music",
                "product_tag": {
                    "id": 5,
                    "product_id": 3,
                    "tag_id": 1,
                    "productId": 3,
                    "tagId": 1
                }
            },
            {
                "id": 3,
                "tag_name": "blue",
                "product_tag": {
                    "id": 6,
                    "product_id": 3,
                    "tag_id": 3,
                    "productId": 3,
                    "tagId": 3
                }
            },
            {
                "id": 4,
                "tag_name": "red",
                "product_tag": {
                    "id": 7,
                    "product_id": 3,
                    "tag_id": 4,
                    "productId": 3,
                    "tagId": 4
                }
            },
            {
                "id": 5,
                "tag_name": "green",
                "product_tag": {
                    "id": 8,
                    "product_id": 3,
                    "tag_id": 5,
                    "productId": 3,
                    "tagId": 5
                }
            }
        ]
    }
]
```

**_Status Code:_** 200

### 4. Get by ID

### Get by ID

Get a single Product in the database and related categories and tags, with the ID number at the end of the URL

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3001/api/products/1
```

**_More example Requests/Responses:_**

#### I. Example Request: Get by ID

#### I. Example Response: Get by ID

```json
{
    "id": 1,
    "product_name": "Plain T-Shirt",
    "price": 14.99,
    "stock": 14,
    "category_id": 1,
    "category": {
        "id": 1,
        "category_name": "Jumpers"
    },
    "tags": [
        {
            "id": 6,
            "tag_name": "white",
            "product_tag": {
                "id": 1,
                "product_id": 1,
                "tag_id": 6,
                "productId": 1,
                "tagId": 6
            }
        },
        {
            "id": 7,
            "tag_name": "gold",
            "product_tag": {
                "id": 2,
                "product_id": 1,
                "tag_id": 7,
                "productId": 1,
                "tagId": 7
            }
        },
        {
            "id": 8,
            "tag_name": "pop culture",
            "product_tag": {
                "id": 3,
                "product_id": 1,
                "tag_id": 8,
                "productId": 1,
                "tagId": 8
            }
        }
    ]
}
```

**_Status Code:_** 200

### 5. Update Product

### Update By ID

Update the tags on a single Product in the database by the ID at the end of the URL.

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: http://localhost:3001/api/products/1
```

**_Body:_**

```json
{
    "tagIds": [5]
}
```

**_More example Requests/Responses:_**

#### I. Example Request: Update Product

**_Body:_**

```json
{
    "tagIds": [5]
}
```

#### I. Example Response: Update Product

```json
[
    3,
    [
        {
            "id": 16,
            "productId": "1",
            "tagId": 5
        }
    ]
]
```

**_Status Code:_** 200

## Tags

### 1. Add New

### Add New

Add a New Tag to the database. It will provide an ID

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:3001/api/tags/
```

**_Body:_**

```json
{
    "tag_name": "rock music"
}
```

**_More example Requests/Responses:_**

#### I. Example Request: Add New

**_Body:_**

```json
{
    "tag_name": "rock music"
}
```

#### I. Example Response: Add New

```json
{
    "id": 9,
    "tag_name": "rock music"
}
```

**_Status Code:_** 200

### 2. Delete Product

### Delete By ID

Delete the Tag in the database by the ID at the end of the URL.

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: http://localhost:3001/api/tags/2
```

**_More example Requests/Responses:_**

#### I. Example Request: Delete Product

#### I. Example Response: Delete Product

```json
"Deleted 2"
```

**_Status Code:_** 200

### 3. Get All

### Get All

Get all Tags in the database and related categories and products

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3001/api/tags/
```

**_More example Requests/Responses:_**

#### I. Example Request: Get All

#### I. Example Response: Get All

```json
[
    {
        "id": 1,
        "tag_name": "rock music",
        "products": [
            {
                "id": 3,
                "product_name": "Branded Baseball Hat",
                "price": 22.99,
                "stock": 12,
                "category_id": 4,
                "product_tag": {
                    "id": 5,
                    "product_id": 3,
                    "tag_id": 1,
                    "productId": 3,
                    "tagId": 1
                }
            },
            {
                "id": 4,
                "product_name": "Top 40 Music Compilation Vinyl Record",
                "price": 12.99,
                "stock": 50,
                "category_id": 3,
                "product_tag": {
                    "id": 9,
                    "product_id": 4,
                    "tag_id": 1,
                    "productId": 4,
                    "tagId": 1
                }
            }
        ]
    },
    {
        "id": 2,
        "tag_name": "pop music",
        "products": [
            {
                "id": 4,
                "product_name": "Top 40 Music Compilation Vinyl Record",
                "price": 12.99,
                "stock": 50,
                "category_id": 3,
                "product_tag": {
                    "id": 10,
                    "product_id": 4,
                    "tag_id": 2,
                    "productId": 4,
                    "tagId": 2
                }
            }
        ]
    },
    {
        "id": 3,
        "tag_name": "blue",
        "products": [
            {
                "id": 3,
                "product_name": "Branded Baseball Hat",
                "price": 22.99,
                "stock": 12,
                "category_id": 4,
                "product_tag": {
                    "id": 6,
                    "product_id": 3,
                    "tag_id": 3,
                    "productId": 3,
                    "tagId": 3
                }
            },
            {
                "id": 5,
                "product_name": "Cargo Shorts",
                "price": 29.99,
                "stock": 22,
                "category_id": 2,
                "product_tag": {
                    "id": 12,
                    "product_id": 5,
                    "tag_id": 3,
                    "productId": 5,
                    "tagId": 3
                }
            }
        ]
    }
]
```

**_Status Code:_** 200

### 4. Get by ID

### Get by ID

Get a single Tag in the database and related categories and products, with the ID number at the end of the URL

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3001/api/tags/1
```

**_More example Requests/Responses:_**

#### I. Example Request: Get by ID

#### I. Example Response: Get by ID

```json
{
    "id": 1,
    "tag_name": "rock music",
    "products": [
        {
            "id": 3,
            "product_name": "Branded Baseball Hat",
            "price": 22.99,
            "stock": 12,
            "category_id": 4,
            "product_tag": {
                "id": 5,
                "product_id": 3,
                "tag_id": 1,
                "productId": 3,
                "tagId": 1
            }
        },
        {
            "id": 4,
            "product_name": "Top 40 Music Compilation Vinyl Record",
            "price": 12.99,
            "stock": 50,
            "category_id": 3,
            "product_tag": {
                "id": 9,
                "product_id": 4,
                "tag_id": 1,
                "productId": 4,
                "tagId": 1
            }
        }
    ]
}
```

**_Status Code:_** 200

### 5. Update Product

### Update By ID

Update the Tag name in the database by the ID at the end of the URL.

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: http://localhost:3001/api/tags/1
```

**_Body:_**

```json
{
    "tag_name": "black"
}
```

**_More example Requests/Responses:_**

#### I. Example Request: Update Product

**_Body:_**

```json
{
    "tag_name": "black"
}
```

#### I. Example Response: Update Product

```json
{
    "message": "black Updated"
}
```

**_Status Code:_** 202

---

[Back to top](#estore-backend)

## Credits

API Generated by [docgen](https://github.com/thedevsaddam/docgen)
