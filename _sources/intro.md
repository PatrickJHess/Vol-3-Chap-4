# **Financial Python**

## **Volume: Basic Concepts of Fixed Income**

### **Chapter Four: Bootstrapping The Term Structure Of Interest Rates**

The "bootstrapping" method determines zero prices (or present value factors) using data from 304 coupon bonds.

Following the fundamental concept of Chapter One, the prices of coupon bonds are assumed to be equivalent to a matching portfolio of zero-coupon bonds. Because the dataset contains more bonds than distinct maturity dates, the bootstrapping process is optimized to minimize the sum of squared differences between the actual and forecasted prices of the coupon bonds.

This methodology provides a system for relative bond pricing. Taking the observed bond prices at face value, discrepancies between observed transaction prices and the prices predicted by the bootstrapping estimates signal potential return-enhancing opportunities. Specifically, investors can increase holdings in bonds where the forecasted price exceeds the actual price and reduce positions where the forecasted price is less than the actual price, assuming the bonds are traded at the observed transaction prices.

Beyond portfolio rebalancing, these bootstrapping estimates have broader applications. As the next chapter will detail, they are used to estimate the required coupon rates for new debt issues, known as par yields. These par yields are valuable to issuers needing to estimate their cost of debt; a company might estimate its debt cost by adding an anticipated spread to the current par yield for debt of the same maturity. Similarly, the bootstrapped values can be used to price other instruments or to compare fixed and floating rate agreements—and many other calculation dependent upon capital market conditions.

### **Leapfroggging into the chapter**

Although Chapters One, Two, and Three introduce concepts and calculations related to this chapter, a prior understanding of the earlier material is not strictly necessary.

You can begin with Chapter Four even if you are unfamiliar with the content of the preceding chapters. This is possible because a custom module containing the functions developed earlier is imported directly into Chapter Four. Although the chapters are related, there are no required dependencies, allowing you to skip ahead and focus on the current chapter.
