// const packageSpots = {
//   25: {
//     tpe: 1029,
//     tps: 2046
//   },
//   100: {
//     tpe: 3069,
//     tps: 6138
//   },
//   250: {
//     tpe: 10745,
//     tps: 14322
//   },
//   500: {
//     tpe: 30705,
//     tps: 30690
//   },
//   1000: {
//     tpe: 79329,
//     tps: 63426
//   },
//   2500: {
//     tpe: 193473,
//     tps: 128898
//   },
//   5000: {
//     tpe: 455041,
//     tps: 259842
//   }
// }



// export function level1(referrals, virality, averagePackage, averagePackageSpots) {
//   console.log(referrals, virality, averagePackage, averagePackageSpots);
//   try {

//     return ((referrals + (referrals * referrals)) * averagePackage * 0.02) + ((referrals * referrals) * virality) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);
//   } catch (e) {



//   }

// }

// export function level2(referrals, virality, averagePackage, averagePackageSpots) {
//   console.log(referrals, virality, averagePackage, averagePackageSpots);
//   try {

//     return ((referrals + (referrals * referrals)) * averagePackage * 0.02) + ((referrals * referrals) * virality) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

//   } catch (e) {



//   }

// }

// export function level3(referrals, virality, averagePackage, averagePackageSpots) {
//   console.log(referrals, virality, averagePackage, averagePackageSpots);

//   try {
//     return level1(referrals, virality, averagePackage, averagePackageSpots) + 
//     (((referrals * referrals)) * virality * averagePackage * 0.02) + 
//     ((referrals * referrals) * virality) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

//   } catch (e) {
//   }
// }



// export function level4(referrals, virality, averagePackage, averagePackageSpots) {

//   try {

//     return level1(referrals, virality, averagePackage, averagePackageSpots)
//       + level3(referrals, virality, averagePackage, averagePackageSpots)
//       + (((referrals * referrals)) * (virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality)) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

//   } catch (e) {



//   }

// }

// export function level5(referrals, virality, averagePackage, averagePackageSpots) {

//   try {
//     return level1(referrals, virality, averagePackage, averagePackageSpots)
//       + level3(referrals, virality, averagePackage, averagePackageSpots)
//       + level4(referrals, virality, averagePackage, averagePackageSpots)
//       + (((referrals * referrals)) * (virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality)) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

//   } catch (e) {



//   }

// }



// export function level6(referrals, virality, averagePackage, averagePackageSpots) {

//   try {

//     return level1(referrals, virality, averagePackage, averagePackageSpots)
//       + level3(referrals, virality, averagePackage, averagePackageSpots)
//       + level4(referrals, virality, averagePackage, averagePackageSpots)
//       + level5(referrals, virality, averagePackage, averagePackageSpots)
//       + (((referrals * referrals)) * (virality * virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality * virality)) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

//   } catch (e) {



//   }

// }

// export function level7(referrals, virality, averagePackage, averagePackageSpots) {

//   try {

//     return level1(referrals, virality, averagePackage, averagePackageSpots)
//       + level3(referrals, virality, averagePackage, averagePackageSpots)
//       + level4(referrals, virality, averagePackage, averagePackageSpots)
//       + level5(referrals, virality, averagePackage, averagePackageSpots)
//       + level6(referrals, virality, averagePackage, averagePackageSpots)
//       + (((referrals * referrals)) * (virality * virality * virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality * virality * virality)) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

//   } catch (e) {



//   }

// }


// export function level8(referrals, virality, averagePackage, averagePackageSpots) {

//   try {

//     return level1(referrals, virality, averagePackage, averagePackageSpots)
//       + level3(referrals, virality, averagePackage, averagePackageSpots)
//       + level4(referrals, virality, averagePackage, averagePackageSpots)
//       + level5(referrals, virality, averagePackage, averagePackageSpots)
//       + level6(referrals, virality, averagePackage, averagePackageSpots)
//       + level7(referrals, virality, averagePackage, averagePackageSpots)
//       + (((referrals * referrals)) * (virality * virality * virality * virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality * virality * virality * virality)) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

//   } catch (e) {



//   }

// }

// export function level9(referrals, virality, averagePackage, averagePackageSpots) {

//   try {

//     return level1(referrals, virality, averagePackage, averagePackageSpots)
//       + level3(referrals, virality, averagePackage, averagePackageSpots)
//       + level4(referrals, virality, averagePackage, averagePackageSpots)
//       + level5(referrals, virality, averagePackage, averagePackageSpots)
//       + level6(referrals, virality, averagePackage, averagePackageSpots)
//       + level7(referrals, virality, averagePackage, averagePackageSpots)
//       + level8(referrals, virality, averagePackage, averagePackageSpots) + (((referrals * referrals)) * (virality * virality * virality * virality * virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality * virality * virality * virality * virality)) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

//   } catch (e) {



//   }

// }



// export function level10(referrals, virality, averagePackage, averagePackageSpots) {

//   try {

//     return level1(referrals, virality, averagePackage, averagePackageSpots)
//       + level3(referrals, virality, averagePackage, averagePackageSpots)
//       + level4(referrals, virality, averagePackage, averagePackageSpots)
//       + level5(referrals, virality, averagePackage, averagePackageSpots)
//       + level6(referrals, virality, averagePackage, averagePackageSpots)
//       + level7(referrals, virality, averagePackage, averagePackageSpots)
//       + level8(referrals, virality, averagePackage, averagePackageSpots)
//       + level9(referrals, virality, averagePackage, averagePackageSpots)
//       + (((referrals * referrals)) * (virality * virality * virality * virality * virality * virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality * virality * virality * virality * virality * virality)) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

//   } catch (e) {



//   }

// }

export function binary_reward_func(R, V, level, SE, E25) {
  return ((R * R) * (Math.pow(V, level - 2)) * SE * E25)
}

export function unilevel_reward(R, V, level, SE, E25) {
  return (((R * R) * E25 * 25 * 0.1) + (((Math.pow(V, level - 2) * Math.pow(R, 2)) - Math.pow(R, 2) ) * E25 * 25 * 0.02))
} 