let packageSpots = {
  25: {
    tpe: 1029,
    tps: 2046
  },
  100: {
    tpe: 3069,
    tps: 6138
  },
  250: {
    tpe: 1029,
    tps: 2046
  },
  500: {
    tpe: 1029,
    tps: 2046
  },
  1000: {
    tpe: 1029,
    tps: 2046
  },
  2500: {
    tpe: 1029,
    tps: 2046
  },
  5000: {
    tpe: 1029,
    tps: 2046
  }
}



export async function level1(referrals, virality, averagePackage, averagePackageSpots) {
  console.log(referrals, virality, averagePackage, averagePackageSpots);
  try {

    return ((referrals + (referrals * referrals)) * averagePackage * 0.02) + ((referrals * referrals) * virality) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);
  } catch (e) {



  }

}

export async function level2(referrals, virality, averagePackage, averagePackageSpots) {

  try {

    return ((referrals + (referrals * referrals)) * averagePackage * 0.02) + ((referrals * referrals) * virality) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

  } catch (e) {



  }

}

export async function level3(referrals, virality, averagePackage, averagePackageSpots) {

  try {
    return level1(referrals, virality, averagePackage, averagePackageSpots) + (((referrals * referrals)) * virality * averagePackage * 0.02) + ((referrals * referrals) * virality) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

  } catch (e) {
  }
}



export async function level4(referrals, virality, averagePackage, averagePackageSpots) {

  try {

    return level1(referrals, virality, averagePackage, averagePackageSpots)
      + level3(referrals, virality, averagePackage, averagePackageSpots)
      + (((referrals * referrals)) * (virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality)) * averagePackageSpots * (packageSpots[averagePackage].tpe / packageSpots[averagePackage].tps);

  } catch (e) {



  }

}

export async function level5(level4, referrals, virality, averagePackage, averagePackageSpots, totalPackageEarning, totalPackageSpots) {

  try {

    return level1(referrals, virality, averagePackage, averagePackageSpots)
      + level3(referrals, virality, averagePackage, averagePackageSpots)
      + level4(referrals, virality, averagePackage, averagePackageSpots)
      + (((referrals * referrals)) * (virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality)) * averagePackageSpots * (totalPackageEarning / totalPackageSpots);

  } catch (e) {



  }

}



export async function level6(referrals, virality, averagePackage, averagePackageSpots, totalPackageEarning, totalPackageSpots) {

  try {

    return level1(referrals, virality, averagePackage, averagePackageSpots)
      + level3(referrals, virality, averagePackage, averagePackageSpots)
      + level4(referrals, virality, averagePackage, averagePackageSpots)
      + level5(referrals, virality, averagePackage, averagePackageSpots)
      + (((referrals * referrals)) * (virality * virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality * virality)) * averagePackageSpots * (totalPackageEarning / totalPackageSpots);

  } catch (e) {



  }

}

export async function level7(referrals, virality, averagePackage, averagePackageSpots, totalPackageEarning, totalPackageSpots) {

  try {

    return level1(referrals, virality, averagePackage, averagePackageSpots)
      + level3(referrals, virality, averagePackage, averagePackageSpots)
      + level4(referrals, virality, averagePackage, averagePackageSpots)
      + level5(referrals, virality, averagePackage, averagePackageSpots)
      + level6(referrals, virality, averagePackage, averagePackageSpots)
      + (((referrals * referrals)) * (virality * virality * virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality * virality * virality)) * averagePackageSpots * (totalPackageEarning / totalPackageSpots);

  } catch (e) {



  }

}


export async function level8(referrals, virality, averagePackage, averagePackageSpots, totalPackageEarning, totalPackageSpots) {

  try {

    return level1(referrals, virality, averagePackage, averagePackageSpots)
      + level3(referrals, virality, averagePackage, averagePackageSpots)
      + level4(referrals, virality, averagePackage, averagePackageSpots)
      + level5(referrals, virality, averagePackage, averagePackageSpots)
      + level6(referrals, virality, averagePackage, averagePackageSpots)
      + level7(referrals, virality, averagePackage, averagePackageSpots)
      + (((referrals * referrals)) * (virality * virality * virality * virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality * virality * virality * virality)) * averagePackageSpots * (totalPackageEarning / totalPackageSpots);

  } catch (e) {



  }

}

export async function level9(referrals, virality, averagePackage, averagePackageSpots, totalPackageEarning, totalPackageSpots) {

  try {

    return level1(referrals, virality, averagePackage, averagePackageSpots)
      + level3(referrals, virality, averagePackage, averagePackageSpots)
      + level4(referrals, virality, averagePackage, averagePackageSpots)
      + level5(referrals, virality, averagePackage, averagePackageSpots)
      + level6(referrals, virality, averagePackage, averagePackageSpots)
      + level7(referrals, virality, averagePackage, averagePackageSpots)
      + level8(referrals, virality, averagePackage, averagePackageSpots) + (((referrals * referrals)) * (virality * virality * virality * virality * virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality * virality * virality * virality * virality)) * averagePackageSpots * (totalPackageEarning / totalPackageSpots);

  } catch (e) {



  }

}



export async function level10(referrals, virality, averagePackage, averagePackageSpots, totalPackageEarning, totalPackageSpots) {

  try {

    return level1(referrals, virality, averagePackage, averagePackageSpots)
      + level3(referrals, virality, averagePackage, averagePackageSpots)
      + level4(referrals, virality, averagePackage, averagePackageSpots)
      + level5(referrals, virality, averagePackage, averagePackageSpots)
      + level6(referrals, virality, averagePackage, averagePackageSpots)
      + level7(referrals, virality, averagePackage, averagePackageSpots)
      + level8(referrals, virality, averagePackage, averagePackageSpots)
      + level9(referrals, virality, averagePackage, averagePackageSpots)
      + (((referrals * referrals)) * (virality * virality * virality * virality * virality * virality * virality * virality) * averagePackage * 0.02) + ((referrals * referrals) * (virality * virality * virality * virality * virality * virality * virality * virality)) * averagePackageSpots * (totalPackageEarning / totalPackageSpots);

  } catch (e) {



  }

}

