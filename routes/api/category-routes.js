const router = require("express").Router()
const { Category, Product } = require("../../models")

// The `/api/categories` endpoint

router.get("/", (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Category.findAll({
        include: [{ model: Product }],
    })
        .then((categoryData) => res.status(200).json(categoryData))
        .catch((err) => res.status(500).json(err))
})

router.get("/:id", async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{ model: Product }],
        })

        if (!categoryData) {
            res.status(404).json({ message: "No reader found with that id!" })
            return
        }

        res.status(200).json(categoryData)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.post("/", async (req, res) => {
    // create a new category
    try {
        const categoryData = await Category.create(req.body)
        res.status(200).json(categoryData)
    } catch (e) {
        res.status(400).json(e)
    }
})

router.put("/:id", (req, res) => {
    // update a category by its `id` value
    Category.update(
        {
            category_name: req.body.category_name,
        },
        {
            where: { id: req.params.id },
        }
    )
        .then(() =>
            res
                .status(202)
                .send({ message: `${req.body.category_name} Updated` })
        )
        .catch((err) => res.status(400).send({ error: `${err}` }))
})

router.delete("/:id", async (req, res) => {
    // delete a category by its `id` value
    try {
        const categoryData = await Category.destroy({
            where: {
                id: req.params.id,
            },
        })

        if (!categoryData) {
            res.status(404).json({ message: "No Category found with that id!" })
            return
        }

        res.status(200).json(`Deleted ${req.params.id}`)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
