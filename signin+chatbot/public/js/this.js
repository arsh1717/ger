const data= {
    "intents": {
        "greeting": {
            "pattern": [
                "hi",
                "hello",
                "hey",
                "what's up?"
            ],
            "responses": [
                "Hello there",
                "Hi"
            ]
        },
        "absli": {
            "pattern": [
                "what is absli?",
                "absli?",
                "what's absli?",
                "what is absli digi shield plan?"
            ],
            "responses": [
                "ABSLI stands for Aditya Birla Sun Life Insurance. ABSLI Digi Shield plan is the term plan-best financial support for the family especially when the policyholder dies.",
                "ABSLI stands for Aditya Birla Sun Life Insurance. A life insurance policy is a cover that pays a sum of money to the family(declared nominee) in case the policyholder passes away in the policy period"
            ]
        },
        "plans": {
            "pattern": [
                "what are plans under absli?",
                "tell me different plans in absli",
                "what are the various life insurance plans in absli?",
                "what are the plans under absli?",
                "what are the types of life insurance in absli?"
            ],
            "responses": [
                "Various Plans are: Level Cover Option, Increasing Cover Option, Sum Assured Reduction Option, Whole Life Option (Level Cover), Whole Life Option (Sum Assured Reduction Cover), Income Benefit, Level Cover Plus Income Benefit, Low Cover Option, Level Cover with Survival Benefit, Return of Premium (ROP)"
            ]
        },
        "Level Cover Option": {
            "pattern": [
                "level cover option",
                "level cover option?",
                "what is level cover option?"
            ],
            "responses": [
                "This option pays the nominee the sum assured in lump-sum in case of the unfortunate death of the life insured during the policy term, provided all the premiums are paid. You will have to choose the nominee, sum assured, policy term, premium payment term and mode of payment during the inception of the policy."
            ]
        },
        "Increasing Cover Option": {
            "pattern": [
                "increasing cover option",
                "increasing cover option?",
                "what is increasing cover option?"
            ],
            "responses": [
                "Under this term insurance option, the sum assured increases every year during the policy term by a simple escalation rate of 5% or 10% per annum. At the inception, you have to choose the sum assured escalation rate. In case of death of the life insured during the policy term, the nominee gets the sum assured as applicable on that date in a lump sum."
            ]
        },
        "Sum Assured Reduction Option": {
            "pattern": [
                "sum assured reduction option",
                "sum assured reduction option?",
                "what is sum assured reduction option?"
            ],
            "responses": [
                "Under this term insurance option, the sum assured can be reduced by 25% or 50% from your retirement age till the end of the policy term. At the inception, you have to choose the reduction factor and your retirement age (60, 65, 70, or 75 years). In case of death of the policyholder during policy term, the nominee gets sum assured as applicable in lump sum."
            ]
        },
        "Whole Life Option (Level Cover)": {
            "pattern": [
                "whole life option (level cover)",
                "whole life option (level cover)?",
                "what is whole life option (level cover)?"
            ],
            "responses": [
                "Under this term insurance option, you get covered till 100 years of age- this stretched cover period is why it’s called a whole life cover. In case of an unfortunate death of the life insured during the policy term, the nominee will receive the sum assured in lump sum."
            ]
        },
        "Whole Life Option (Sum Assured Reduction Cover)": {
            "pattern": [
                "whole life option (sum assured reduction cover)",
                "whole life option (sum assured reduction cover)?",
                "what is whole life option (sum assured reduction cover)?",
                "what is sum assured reduction cover in whole life option?"
            ],
            "responses": [
                "Under this term insurance option, you get life cover till 100 years of age plus the option to reduce the sum assured by 25% or 50% when retiring at age of 60/ 65/ 70/ 75 years till policy termination. The nominee gets the sum assured applicable in lump sum, in case of death of the life insured in the policy term"
            ]
        },
        "Income Benefit": {
            "pattern": [
                "income benefit",
                "income benefit?",
                "what is income benefit?"
            ],
            "responses": [
                "In case of the death of the policyholder in the policy term, this option pays the nominee a monthly income of 1.5% of sum assured throughout the chosen income benefit period(10/15/20 years). At the inception of the policy, you can also choose to increase the monthly income by simple 5% p.a over the income benefit period."
            ]
        },
        "Level Cover Plus Income Benefit": {
            "pattern": [
                "level cover plus income benefit",
                "level cover plus income benefit?",
                "what is level cover plus income benefit?"
            ],
            "responses": [
                "Instant financial relief to family matters after the sudden demise of the policyholder. Under this term insurance option, the nominee immediately gets 100% of the sum assured as a lump sum on the date of death of the life insured plus 0.5% of the sum assured as monthly income for a period of 10 years."
            ]
        },
        "Low Cover Option": {
            "pattern": [
                "low cover option",
                "low cover option?",
                "what is low cover option?"
            ],
            "responses": [
                "Under this term insurance option, the nominee(s)/ legal heir(s)/ assignee will receive the sum assured as a lump sum in case of the unfortunate demise of the policyholder in the policy term."
            ]
        },
        "Level Cover with Survival Benefit": {
            "pattern": [
                "level cover with survival benefit",
                "level cover with survival benefit?",
                "what is level cover with survival benefit?"
            ],
            "responses": [
                "Under this term insurance option, you get survival benefit as a monthly income of 0.12% of the sum assured from when you turn 60 till the date of death or end of the policy term, whichever is earlier. In case of death during policy term, the nominee gets a sum assured less survival benefit already paid till death."
            ]
        },
        "Return of Premium (ROP)": {
            "pattern": [
                "return of premium(rop)",
                "return of premium(rop)?",
                "What is return of premium(rop)?",
                "what is rop?",
                "rop?"
            ],
            "responses": [
                "Under this term insurance option, in case of survival of the policyholder beyond the policy term, 100% of total premiums paid(maturity benefits) will be paid back. In case of the death of the policyholder during the policy term, the nominee will receive the sum assured in a lump sum."
            ]
        },
       "benefits":{
            "pattern":[
                "what are the benefits of absli plans?",
                "what are the benefits of these plans?",
                "what is our benefit in buying life insurance from absli?",
                "benefits of absli?",
                "what are the merits of absli plans?"
            ],
            "responses":[
                "The Benefits of these plans are: Death Benefit, Tax Benefit, Enhanced Life Stage Protection, Accelerated Critical Illness (ACI) Benefit, Rider Options, Maturity benefit, Terminal Illness Benefit",
                "Many Benefits like- In case of policyholder’s death during the policy term, we care to pay the death benefits to the nominee(s) or legal heir(s) a lump sum or monthly income according to the plan option.",
                "In case a terminal illness is diagnosed when you are below 80 years, the policy will immediately pay you 50% of the applicable sum assured up to Rs. 2 Cr is one such benefit",
                "Buy ABSLI DigiShield Plan and save tax under section 80C of Income Tax Act,1961. Tax benefits can be enjoyed up on premium paid and benefits received under the policy. Tax benefits are subject to changes in tax laws. Kindly consult your financial advisor for more details.",
                "Opt for this benefit while purchasing the policy and you can increase the sum assured at important stages of life without undergoing a fresh medical test by paying an increased premium.",
                "Accelerated Critical Illness benefit is paid on the first diagnosis of a specified critical illness after 90 days of waiting period when the policy is in force.",
                "Buy any of the six riders at a nominal extra cost for a wider coverage of life. Riders include ABSLI Accidental Death and Disability Rider (UIN: 109B018V03), ABSLI Critical Illness Rider (UIN: 109B019V03), ABSLI Surgical Care Rider (UIN: 109B015V03), ABSLI Hospital Care Rider (UIN: 109B016V03), ABSLI Accidental Death Benefit Rider Plus (UIN:109B023V02) , and ABSLI Waiver of Premium (UIN: 109B017V03)."
            ]
       }
    }
};
export default data["intents"];