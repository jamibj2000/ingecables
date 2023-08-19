import C6x19DualFC from "./Data/Description&Tables/Cables/C6x19DualFC";
import Galvanizado1x7 from "./Data/Description&Tables/Cables/Galvanizado1x7";
import Galvanizado1x19 from "./Data/Description&Tables/Cables/Galvanizado1x19";
import AISI3161x19 from "./Data/Description&Tables/Cables/AISI3161x19";
import FC6x7 from "./Data/Description&Tables/Cables/FC6x7";
import WSCAISI3166x7 from "./Data/Description&Tables/Cables/WSCAISI3166x7";
import WSC6x19 from "./Data/Description&Tables/Cables/WSC6x19";
// import WSCAISI3166x19 from "./Data/Description&Tables/Cables/WSCAISI3166x19";
import IWRC8x31WS from "./Data/Description&Tables/Cables/IWRC8x31WS";
import DualFC6x19 from "./Data/Description&Tables/Cables/DualFC6x19";
import FCalmatextil6x19M from "./Data/Description&Tables/Cables/FCalmatextil6x19M";
import QS816V from "./Data/Description&Tables/Cables/QS816V";
import Almamixta8x19 from "./Data/Description&Tables/Cables/Almamixta8x19";
import WIWRC8x19 from "./Data/Description&Tables/Cables/WIWRC8x19";
import CablePremiumSwaged6xWS from "./Data/Description&Tables/Cables/CablePremiumSwaged6xWS";
import FC8x31WS from "./Data/Description&Tables/Cables/FC8x31WS";
import IWRCCompactado8x36SW from "./Data/Description&Tables/Cables/IWRCCompactado8x36SW";
import IWRC8x36WS from "./Data/Description&Tables/Cables/IWRC8x36WS";
import FC8x36WS from "./Data/Description&Tables/Cables/FC8x36WS";
import K7EPWSC35 from "./Data/Description&Tables/Cables/K7EPWSC35";
import Antigiratorio35Wx7 from "./Data/Description&Tables/Cables/Antigiratorio35Wx7";
import AntigiratorioTK16 from "./Data/Description&Tables/Cables/AntigiratorioTK16";
import HyfilK88 from "./Data/Description&Tables/Cables/HyfilK88";
import ESPHyfilR88 from "./Data/Description&Tables/Cables/ESPHyfilR88";
import HYLIFTK1635Wx7 from "./Data/Description&Tables/Cables/HYLIFTK1635Wx7";
import WSC6x7 from "./Data/Description&Tables/Cables/WSC6x7";
import Antigiratorio19x70 from "./Data/Description&Tables/Cables/Antigiratorio19x70";
import FC6x36WS from "./Data/Description&Tables/Cables/FC6x36WS";
import IWRC6x36WS from "./Data/Description&Tables/Cables/IWRC6x36WS";
// import FC6x25F from "./Data/Description&Tables/Cables/FC6x25F";
// import IWRC6x25F from "./Data/Description&Tables/Cables/IWRC6x25F";
// import IWRC6x36COMP from "./Data/Description&Tables/Cables/IWRC6x36COMP";
import Galvanizada30 from "./Data/Description&Tables/Cadenas/Galvanizada30";
// import CrosbyA1328 from "./Data/Description&Tables/Accesorios/CrosbyA1328";
// import GuardacableInox from "./Data/Description&Tables/Accesorios/GuardacableInox";
// import GuardacableReforzado from "./Data/Description&Tables/Accesorios/GuardacableReforzado";
// import AnodoszincAmericano from "./Data/Description&Tables/Accesorios/AnodoszincAmericano";
// import AnillaDIN582 from "./Data/Description&Tables/Accesorios/AnillaDIN582";
// import AnillaDIN580 from "./Data/Description&Tables/Accesorios/AnillaDIN580";
// import AnillaDINoval from "./Data/Description&Tables/Accesorios/AnillaDINoval";
// import SujetacablesG429 from "./Data/Description&Tables/Accesorios/SujetacablesG429";
// import SujetacablesG450 from "./Data/Description&Tables/Accesorios/SujetacablesG450";
// import SujetacablesG460 from "./Data/Description&Tables/Accesorios/SujetacablesG460";
// import SujetacablesG461 from "./Data/Description&Tables/Accesorios/SujetacablesG461";
// import SujetacablesG209 from "./Data/Description&Tables/Accesorios/SujetacablesG209";
// import SujetacablesG209A from "./Data/Description&Tables/Accesorios/SujetacablesG209A";
// import SujetacablesG2130 from "./Data/Description&Tables/Accesorios/SujetacablesG2130";

const obj = 
    {
        /*
            CABLES
        */
        "dualfc19" : <C6x19DualFC />,
        "galvanizado1x7" : <Galvanizado1x7 />,
        "AISI316-1x19" : <AISI3161x19 />,
        "galvanizado1x19" : <Galvanizado1x19 />,
        "FC+6x7" : <FC6x7 />,
        "WSCAISI-316+6x7" : <WSCAISI3166x7 />,
        "WSC6x19" : <WSC6x19 />,
        // "WSCAISI316-6x19" : <WSCAISI3166x19 />,
        "Dual+FC-6x19" : <DualFC6x19 />,
        "FCalmatextil6x19M" : <FCalmatextil6x19M />,
        "QS816V" : <QS816V />,
        "almamixta8x19" : <Almamixta8x19 />,
        "WIWRC8x19" : <WIWRC8x19 />,
        "cablePremiumSwaged6xWS" : <CablePremiumSwaged6xWS />,
        "FC8x31WS" : <FC8x31WS />,
        "IWRCCompactado8x36SW" : <IWRCCompactado8x36SW />,
        "IWRC8x36WS" : <IWRC8x36WS />,
        "IWRC8x31WS" : <IWRC8x31WS />,
        "FC8x36WS" : <FC8x36WS />,
        "K7EPWSC35" : <K7EPWSC35 />,
        "antigiratorio35Wx7" : <Antigiratorio35Wx7 />,
        "antigiratorioTK16" : <AntigiratorioTK16 />,
        "HyfilK88" : <HyfilK88 />,
        "ESPHyfilR88" : <ESPHyfilR88 />,
        "HYLIFTK1635Wx7" : <HYLIFTK1635Wx7 />,
        "WSC6x7" : <WSC6x7 />,
        "antigiratorio19x70" : <Antigiratorio19x70 />,
        "FC6x36WS" : <FC6x36WS />,
        "IWRC6x36WS" : <IWRC6x36WS />,
        // "FC6x25F" : <FC6x25F />,
        // "IWRC6x25F" : <IWRC6x25F />,
        // "IWRC6x36COMP" : <IWRC6x36COMP />

        /*
            CADENAS
        */
       "CadenaGal30" : <Galvanizada30 />,
       /*
            ACCESORIOS
       */
        // "CrosbyA1328": <CrosbyA1328 />,
        // "GuardacableInox": <GuardacableInox />,
        // "GuardacableReforzado": <GuardacableReforzado />,
        // "AnodoszincAmericano": <AnodoszincAmericano />,
        // "AnillaDIN582": <AnillaDIN582 />,
        // "AnillaDIN580": <AnillaDIN580 />,
        // "AnillaDINoval": <AnillaDINoval />,
        // "SujetacablesG-429": <SujetacablesG429 />,
        // "SujetacablesG-450": <SujetacablesG450 />,
        // "SujetacablesG-460": <SujetacablesG460 />,
        // "SujetacablesG-461": <SujetacablesG461 />,
        // "SujetacablesG-209": <SujetacablesG209 />,
        // "SujetacablesG-209A": <SujetacablesG209A />,
        // "SujetacablesG-2130": <SujetacablesG2130 />,
    }

export default obj