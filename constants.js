const txtSmall = 12;
const txtMedium = 14;
const txtLarge = 24;
/*
const Route = {
    {
        name: 'Home',
        route: 'Hom'
    }
}*/


const TextStyleSmall = {
    fontSize:txtSmall,
    fontFamily: 'OpenSans_300Light'
}

const TextStyleMedium = {
    fontSize:txtMedium,
    fontFamily: 'OpenSans_400Regular'
}

const TextStyleLarge = {
    fontSize:txtLarge,
    fontFamily: 'OpenSans_300Light'
}

const ShadowEffect = {
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.40,
shadowRadius: 2,
elevation: 5,
}

const ShadowEffectDown = {
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 0,
    },
    shadowOpacity: 0.40,
    shadowRadius: 0,
    elevation: 0,
    }


const FillView = {
    width: '100%',
    height: '100%'
}

const FlexCenter = {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
}

export {FillView,FlexCenter,ShadowEffect,ShadowEffectDown,TextStyleSmall,TextStyleMedium,TextStyleLarge};