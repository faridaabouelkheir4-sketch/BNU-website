let grants = {
  excellenceGrants: {
    newStudents: {
      title: "Excellence grants for newly admitted students at First Year",
      description: "A full scholarship is awarded to five students from each college of the university for those who are among the top 300 students in each division of the Egyptian General Secondary School for the same year of enrollment."
    },
    continuingStudents: {
      title: "Excellence grants for students during their university studies (starting in Second Year)",
      description: "The top five students from each college receive discounts according to rank, provided the overall grade is not less than 90%.",
      discountByRank: [
        { rank: "First", discount: "25%" },
        { rank: "Second", discount: "20%" },
        { rank: "Third", discount: "15%" },
        { rank: "Fourth and Fifth", discount: "10%" }
      ],
      grantsByCohortSize: [
        { cohortSize: "300 to 500 students", grantsAwarded: 5 },
        { cohortSize: "100 to 300 students", grantsAwarded: 3 },
        { cohortSize: "Fewer than 100 students", grantsAwarded: 1 }
      ]
    },
    sportsExcellence: {
      title: "Sports Excellence Grants in the following year",
      international: [
        { medal: "Gold", discount: "70%" },
        { medal: "Silver", discount: "50%" },
        { medal: "Bronze", discount: "25%" }
      ],
      arabAndAfrican: [
        { medal: "Gold", discount: "30%" },
        { medal: "Silver", discount: "20%" },
        { medal: "Bronze", discount: "10%" }
      ]
    },
    distinguishedAndCreative: "Distinguished and creative students in scientific research and various fields are granted a discount percentage approved by the university council, which specifies the percentage and timing for benefiting from it."
  },

  tuitionFeeReductions: [
    {
      category: "Sons of martyrs",
      description: "From the armed forces, police, and medical staff",
      discount: "50%"
    },
    {
      category: "Second-degree relatives (siblings)",
      description: "For a student enrolling while their sibling is still a student, applicable to only one sibling",
      discount: "10%"
    },
    {
      category: "Sons of college members and staff",
      description: "Working full-time at Benha National University and Governmental Universities",
      discount: "20%"
    },
    {
      category: "Students with disabilities",
      description: "Discount equivalent to their disability percentage, provided they obtain a comprehensive services card",
      discount: "Varies"
    }
  ],

  socialSupport: "The university president, based on the recommendation of the vice president for academic affairs, may grant a student who has lost a family member during their studies and whose financial situation has been affected a reduction in tuition fees ranging from 5% to 25%.",

  generalRules: [
    "Grants and discounts apply only to Egyptian students.",
    "Discounts apply only to tuition fees and do not apply to administrative fees or any other amounts.",
    "Excellence grants, whether academic or athletic, apply in the following year.",
    "It is not permissible to combine more than one grant; a student may benefit from only the highest grant.",
    "Grants or discounts are not applied retroactively under any circumstances."
  ]
};

export default grants;