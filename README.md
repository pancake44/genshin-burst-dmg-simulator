# genshin-burst-dmg-simulator

## Version 1.0

July 29, 2021

First release of Genshin Burst Damage Simulator!

Features:
+ Burst damage calculation for +15 characters
  + Includes melt/vape modifiers
+ Overload, electrocharge, shatter (geo-triggered), swirl damage calculation
+ Select ATK, Crit Damage, Elemental Damage Bonus, Elemental Mastery, and Reaction Damage Bonus (and choose between Lvl 80/90 for reaction damage bonus calculation)

Changes to Come Soon (in v1.\*)
+ Calculate reaction damage bonus for swirl/shatter/electrocharge/overload independent of eachother, instead of as one input, for all four
+ Compress character images (they're unnecesarily high-res and increase loading time)
+ More transparent on how some damage values are calculated (e.g. Albedo's assumes that his "E" was popped prior to casting his ult)
+ Make it prettier (I am not a graphic designer)

Changes to Come Later (v2\+)
+ Decide how to calculate burst dmg for the rest of the characters - for example, Xiao's ult is more of a "state," so calculating dmg from that will probably have to take the form of DPS or total maximum damage with time taken into account
+ Incorporate physical dmg, superconduct
+ Use MongoDB to hold character burst dmg values, potentially additional values as burst dmg calcualtion becomes more complex
