export default {
    pricingModels: [
        {
            id: 1,
            title: "Free",
            isPremium: false,
            price: "$ 0",
            subTitle:
                "Integrate with our product for free gaining access to a rich set of features",
            features: [
                {
                    id: 1,
                    title: "Quisque gravida erat non lobortis",
                    included: true
                },
                {
                    id: 2,
                    title: "Cras vel ipsum nec odio tempus euismod",
                    included: true
                },
                {
                    id: 3,
                    title: "sodales molestie imperdiet vitae",
                    included: false
                },
                {
                    id: 4,
                    title: "et ullamcorper lectus molestie in",
                    included: false
                }
            ]
        },
        {
            id: 2,
            title: "Premium",
            isPremium: true,
            price: "$ 20",
            subTitle:
                "Gain access to all the free features and more. This completes all of your business needs. Includes 24x7 support and a dedicated team.",
            features: [
                {
                    id: 1,
                    title: "Quisque gravida erat non lobortis",
                    included: true
                },
                {
                    id: 2,
                    title: "Cras vel ipsum nec odio tempus euismod",
                    included: true
                },
                {
                    id: 3,
                    title: "sodales molestie imperdiet vitae",
                    included: true
                },
                {
                    id: 4,
                    title: "et ullamcorper lectus molestie in",
                    included: true
                },
                {
                    id: 5,
                    title: "Sed justo dolor",
                    included: true
                }
            ]
        }
    ]
}