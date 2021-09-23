import React, { Component } from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles';
import logo from '../../asserts/decor-brand.png'
const useStyles = makeStyles(() => ({
    titre: {
        margin: "100px 100px",
        color: "#268067"
    }

}));
class Conseils extends Component {

    render() {
        const { classes } = this.props
        return (
            <>
                <Container maxWidth="md">

                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Typography style={{ marginTop: "60px" }} variant="h5">CONSEILS PRATIQUES</Typography>

                        <img src={logo} alt="" style={{ margin: "20px 46%" }} />
                        <Grid xs={12}>
                            <Typography style={{ textAlign: "center" }} color="primary" variant="h6">Préparer votre venue au laboratoire </Typography>
                        </Grid>
                        <Grid xs={12} >
                            <Typography color="inherit" variant="body2"> L'accueil des patients voulant réaliser des examens de biologie médicale se fait aux horaires indiqués : de lundi au samedi (de 7h à 19h) La prise de rendez-vous n'est pas nécessaire. Les prélèvements sanguins chez les adultes se font sans rendez-vous sur l’ensemble dans notre laboratoire.. Les prélèvements microbiologiques (prélèvements gynécologiques, urétraux, prélèvements divers, peau, ongles, cheveux…) et chez les enfants de moins de 5 ans sont réalisés au laboratoire Le jour du prélèvement,
                            les documents à apporter sont:
                            <ul style={{ marginLeft: "50px" }}>
                                    <li >votre carte d’identité nationle ou votre attestation de sécurité sociale. Un élément clé de votre prise en charge. Pensez à la mettre à jour dans les bornes réservées à cet effet (pharmacies, CPAM,...)</li><li  >votre carte de mutuelle.</li><li>	votre ordonnance en cours de validité (1 an)</li>
                                </ul> </Typography>
                        </Grid>


                        <img src={logo} alt="" style={{ margin: "20px 46%" }} />
                        <Grid xs={12}>
                            <Typography style={{ textAlign: "center" }} color="primary" variant="h6"> Accueil au secrétariat </Typography>
                        </Grid>
                        <Grid xs={12} >
                            <Typography color="inherit" variant="body2">  A l'accueil, la secrétaire médicale enregistre votre dossier avec votre ordonnance. Elle a besoin d'informations indispensables pour la constitution de votre dossier administratif, à savoir:
                            <ul style={{ marginLeft: " 50px" }}><li  >votre identité complète : nom, prénom, date de naissance</li><li>votre adresse</li><li>votre numéro de téléphone</li><li  >votre prise en charge : caisse de sécurité sociale et mutuelle</li><li  >votre adresse électronique (email) pour visualiser vos résultats en ligne</li></ul>
                            Peut le s'inscrie a distance sur notre plateforme </Typography>
                        </Grid>
                        <img src={logo} alt="" style={{ margin: "20px 46%" }} />

                        <Grid xs={12}>
                            <Typography style={{ textAlign: "center" }} color="primary" variant="h6"> Recommandations avant le prélèvement sanguin  </Typography>
                        </Grid>
                        <Grid xs={12} >
                            <Typography color="inherit" variant="body2">  Les prélèvements sont réalisés dans votre laboratoire sans rendez-vous. Certains examens de biologie médicale nécessitent un jeûne strict, d'autres un régime alimentaire particulier ou une plage horaire spéciale. En règle générale, il faut éviter de prendre un repas riche en sucres et en graisses juste avant une prise de sang, même si le jeûne n'est pas demandé pour les examens prescrits. Si le jeûne strict est demandé, vous devez ne pas avoir mangé dans les 10 heures qui précèdent le prélèvement. Un verre d'eau est toléré.  </Typography>
                        </Grid>
                        <img src={logo} alt="" style={{ margin: "20px 46%" }} />

                        <Grid xs={12}>
                            <Typography style={{ textAlign: "center" }} color="primary" variant="h6">  Comment se déroule votre prélèvement au laboratoire  </Typography>
                        </Grid>
                        <Grid xs={12} >
                            <Typography color="inherit" variant="body2">   Une fois votre dossier enregistré par nos secrétaires médicales, un préleveur habilité vous accompagne en salle de prélèvement où : <ul   style={{ marginLeft: "50px" }}><li  >une confirmation de votre identité est réalisée afin de prévenir tout risque d'erreur</li><li  >selon les analyses prescrites, des renseignements cliniques (traitements en cours, cible thérapeutique,...) vous seront demandés.</li></ul>  </Typography>
                        </Grid>
                        <img src={logo} alt="" style={{ margin: "20px 46%" }} />

                        <Grid xs={12}>
                            <Typography style={{ textAlign: "center" }} color="primary" variant="h6">   Prélèvements chez les enfants  </Typography>
                        </Grid>
                        <Grid xs={12} >
                            <Typography color="inherit" variant="body2">   Les prélèvement chez les enfants sont réalisés au laboratoire. La prise de sang peut générer de l'inquiétude et du stress tant chez les parents que chez l'enfant. Votre médecin peut prescrire un "patch" anesthésique local (disponible en pharmacie) à poser au minimum 30 minutes avant la prise de sang. Cela permettra de supprimer la douleur ressentie par l'enfant. Nous pouvons poser les patchs au laboratoire si vous le souhaitez, vous pouvez également passer la veille du prélèvement pour que nous vous indiquions la zone à anesthésier. Si vous devez poser vous même le patch sans conseil préalable, nous vous recommandons de poser 1 (ou 1/2) patch sur chaque bras au niveau du pli du coude . </Typography>
                        </Grid>
                        <img src={logo} alt="" style={{ margin: "20px 46%" }} />

                        <Grid xs={12}>
                            <Typography style={{ textAlign: "center" }} color="primary" variant="h6">    Prélèvements à domicile   </Typography>
                        </Grid>
                        <Grid xs={12} >
                            <Typography color="inherit" variant="body2">    Le Laboratoire LaboBA réalise des prélèvements à domicile. Les prélèvement à domicile sont sur rendez-vous. Veuillez appeler le numéro XXXXXXX, ouvert 24h/24. Lorsque la notion "à domicile" n'est pas précisée sur votre ordonnance, les frais de déplacement seront à votre charge.  </Typography>
                        </Grid>
                        <img src={logo} alt="" style={{ margin: "20px 46%" }} />

                        <Grid xs={12}>
                            <Typography style={{ textAlign: "center" }} color="primary" variant="h6">    Prélèvements microbiologiques (bactériologie, mycologie, parasitologie)   </Typography>
                        </Grid>
                        <Grid xs={12} >
                            <Typography color="inherit" variant="body2"> Le laboratoire LaboBA vous accueille pour vous
                            expliquer et/ou réaliser les prélèvements microbiologiques. Ce type de prélèvement
                            nécessite, le plus souvent, des conditions de recueil particulières. La plupart des
                             prélèvements microbiologiques nécessitent des renseignements cliniques.<br />ECBU  :
                              devant l’existence d’une symptomatologie urinaire :<ul style={{ marginLeft: "50px" }}>
                                    <li > Dysurie (= difficulté à uriner)</li>
                                    <li>Pollakiurie (= mictions fréquentes et peu abondantes)</li>
                                    <li  >Brûlures (lorsque vous urinez)</li>
                                    <li  >Hématurie macroscopique (= sang dans les urines)</li>
                                    <li  >Pesanteur vésicale (= lourdeur au niveau de la vessie)</li>
                                    <li  >Présence de symptômes EVOCATEURS d’une infection urinaire :
                                   Incontinence urinaire/ Douleurs lombaires et/ou abdominales</li>
                                    <li  >Autres symptômes : Dépistage positif par utilisation d’une
                                   bandelette/Protéinurie (présence de protéines dans les urines)</li>
                                    <li  >Hyperthermie (≥ 38 °C)</li>
                                    <li  >Urines malodorantes</li></ul>
                                <br />Prélèvement cervico-vaginal  : dans les contextes suivants :
                                   <ul   style={{ marginLeft: "50px" }}>
                                    <li  >Leucorrhées (pertes vaginales) abondantes et/ou
                                        malodorantes</li><li  >Prurit (démangeaisons)</li>
                                    <li  >Erythème vulvaire (rougeur de la peau)</li>
                                    <li  >Sensations de brûlures, douleurs</li>
                                    <li  >Saignements</li>
                                    <li  >Mycose récidivante ou échec d'un traitement antimycosique
                                        </li><li  >Infection sexuellement transmissible</li>
                                    <li  >Grossesse en cours : Portage de Streptococcus agalactiae
                                         (B)/ Antécédent(s) d'accouchement prématuré</li></ul>
                                <br />Parasitologie des selles et/ou Coproculture
                                         <ul style={{ marginLeft: "50px" }}>

                                    <li>Voyage récent en pays tropical </li>
                                    <li  >TIAC (toxi-infection alimentaire collective)</li>
                                    <li  >Cas groupés de gastro-entérites</li>
                                    <li  >Examen "réglementaire" (médecine du travail par exemple)
                                            </li></ul>
                                <br />Recherche de dermatophytes  : dans les contextes suivants :
                                           <ul style={{ marginLeft: "50px" }}>
                                    <li  >Voyage récent en pays tropical</li>
                                    <li  >Patient immunodéprimé</li>
                                    <li  >Animaux familiers</li>
                                    <li  >Localisation des lésions : Sur la peau glabre/
                                    Dans les plis/ Sur les ongles/ Sur le cuir chevelu/ Sur les zones
                                                pileuses…</li></ul><br />Prélèvement urétral  : en cas de :
                                                <ul style={{ marginLeft: "50px" }}>
                                    <li  >Ecoulement urétral</li>
                                    <li  >Ulcération(s) génitale(s)</li>
                                    <li>Sensations de brûlures mictionnelles, douleurs</li>
                                    <li>Infection sexuellement transmissible</li>
                                </ul> </Typography>
                        </Grid>
                        <img src={logo} alt="" style={{ margin: "20px 46%" }} />

                        <Grid xs={12}>
                            <Typography  style={{ textAlign: "center" }} color="primary" variant="h6">     Prélèvements urinaires    </Typography>
                        </Grid>
                        <Grid xs={12} >
                            <Typography color="inherit" variant="body2">    Le volume est important, la totalité des urines doit être recueillie. 1er jour : au lever, rejeter les urines dans les toilettes. Noter la date et l’heure (=début du recueil) sur le flacon. Recueillir ensuite pendant 24 heures toutes les urines émises y compris celles de la nuit et du lendemain matin au lever (même heure que la veille). Noter la date et l’heure de fin de recueil. Conserver le flacon dans un endroit frais (entre 2 et 8°C si possible) et sec pendant la durée du recueil. Identifier le(s) flacon(s) avec votre nom et votre prénom Conserver les urines entre 2 et 8°C et les apporter le jour même au laboratoire (conservation maximum 12h).   </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}
export default withStyles(useStyles)(Conseils);