
import java.awt.AWTException;
import java.awt.Robot;



import java.awt.event.KeyEvent;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import java.util.ArrayList;
import java.util.Calendar;

import java.util.GregorianCalendar;

import java.util.Random;







public class GeneralClass  {


	public static Robot robot;

	public GeneralClass () throws AWTException, IOException
	{

		robot= new Robot();

	}

	public void miniziseCurrentBrowser() throws InterruptedException
	{

		robot.keyPress(KeyEvent.VK_ALT);
		Thread.sleep(300);
		robot.keyPress(KeyEvent.VK_SPACE);
		Thread.sleep(300);
		robot.keyPress(KeyEvent.VK_N); 
		robot.keyRelease(KeyEvent.VK_ALT);
		robot.keyRelease(KeyEvent.VK_SPACE);
		robot.keyRelease(KeyEvent.VK_N);
	}


	public void robotSpace() throws InterruptedException
	{


		robot.keyPress(KeyEvent.VK_SPACE);
		Thread.sleep(300);
		robot.keyRelease(KeyEvent.VK_SPACE);
	}

	public void type(int i)
	{
		robot.delay(40);
		robot.keyPress(i);
		robot.keyRelease(i);
	}


	public void Robotrefresh()
	{
		robot.delay(40);
		robot.keyPress(KeyEvent.VK_F5);
		robot.keyRelease(KeyEvent.VK_F5);
	}


	public void mouseWheel (int i)
	{
		robot.mouseWheel(i);
	}



	public void robotLeft() throws InterruptedException
	{


		robot.keyPress(KeyEvent.VK_LEFT);

		robot.keyRelease(KeyEvent.VK_LEFT);

	}


	public void robotRight() throws InterruptedException
	{


		robot.keyPress(KeyEvent.VK_RIGHT);
		robot.keyRelease(KeyEvent.VK_RIGHT);
	}

	public void robotUp() throws InterruptedException
	{


		robot.keyPress(KeyEvent.VK_UP);

	}

	public void robotDOWN() throws InterruptedException
	{


		robot.keyPress(KeyEvent.VK_DOWN);

	}



	public static String[] fname = {

			// names taken from https://www.randomlists.com/last-names

			"BRAEDON","DANTE","JAYLIN","CALI","KAYLIE","EZEQUIEL","JASLYN","AVERY","HOWARD","FRANCES",
			"PERLA","ELLIANA","KARTER","IRVIN","KINLEY","TERRENCE","CELESTE","JAYVION","YAHIR","EMILY",
			"ISABELLA","KASH","LEYLA","ADELAIDE","HUGH","NOE","SEMAJ","OMARI","ELLIOT","ZAIDEN",
			"ARIANA","ROBERT","CAMILLE","YASMINE","AGUSTIN","ALDEN","SEBASTIAN","SANAA","OSVALDO","CAMILA",
			"ALIA","RUDY","MELISSA","KENYON","MARIN","MARITZA","LOUIS","ALBERTO","JEREMIAH","BEAU",
			"MELVIN","BRIA","BROOKLYN","TY","CHARLIE","MAEVE","ZANE","AADEN","MARYJANE","PRANAV",
			"JAXSON","LILLY","IGNACIO","ELISHA","RENEE","DARIAN","KIERRA","ZAIRE","KEITH","SHANIYA",
			"MIRANDA","JAMESON","ZAYNE","GIOVANNA","EMERSON","ZACHARY","KELSIE","REESE","MAKHI","ALEXIS",
			"CASSIUS","FERNANDA","ALEJANDRO","JUDAH","TYRELL","KENYA","BLAKE","ZACK","PAUL","VAN",
			"JAMYA","CECELIA","TAMIA","KAMORA","KORBIN","FISHER","HARLEY","MARTHA","DEVIN","JARON",
			"SCARLETT","CHANA","EVERETT","OLIVE","TYSHAWN","ALVIN","IVY","GREYSON","DEANGELO","REINA",
			"DELANEY","SIERRA","MARC","NANCY","ALAN","TALON","BRADYN","HUNTER","SUMMER","SOPHIA",
			"GIOVANNY","TYLER","MALAKI","ADRIEN","CAEL","TATIANA","JAYLON","AMARI","AXEL","TAMARA",
			"AYDIN","ACE","CASSIDY","BROOKLYNN","PARIS","IVAN","BRUCE","MAYRA","WINSTON","MARLIE",
			"HEATHER","VALERY","ALEXUS","KAMREN","AEDAN","NIKOLAI","GREGORY","MYLEE","KYLE","CORY",
			"ALESSANDRO","MAKAI","JACEY","ALISON","STEVEN","LILA","TALIA","FIONA","CESAR","CASSIE",
			"ELLIOTT","JANIYAH","JORDYN","CAITLIN","BENJAMIN","JAYLAN","KOBE","JAELYNN","KALE","PRINCE",
			"BRAEDEN","HUMBERTO","GINA","BRAIDEN","PRISCILLA","GARRETT","JAYVON","ABDIEL","AMIRA","CAMPBELL",
			"ABBIGAIL","BRILEY","QUINN","CONOR","CHAYA","JACKSON","CHARLEE","BOBBY","COLLIN","CARSEN",
			"ELLIS","MAGGIE","BRANDON","ALEXANDRIA","TESS","MONIQUE","AMIYA","TERRELL","CYRUS","MICHAEL",
			"KYLEE","KRISH","LAMAR","MEREDITH","HAYLEY","LARISSA","CADEN","ASHLYN","GIOVANI","MYA",
			"ANTOINE","JOHANNA","AYANA","GIOVANNI","PATRICIA","BRYANNA","YASMIN","ALONZO","RICARDO","SOPHIE",
			"KASEY","JASON","DRAVEN","SIMEON","SALVATORE","DAISY","JOSH","JASLENE","LEANNA","BRIANA",
			"XIMENA","SHARON","JORDAN","ELISE","TUCKER","ALEXA","LIZETH","COLT","THOMAS","RORY",
			"AINSLEY","LAUREL","YOSEF","MACIE","DESHAWN","ORION","AMANDA","CHEYANNE","ANTONIO","LARA",
			"CLAIRE","ADDISON","JUSTUS","JACQUELINE","ELIANA","KESHAWN","JIMMY","KILEY","TRAVIS","KRISTIN",
			"MILES","DILLAN","JASIAH","CLAY","AURORA","RAVEN","GIADA","KRISTOPHER","RAYAN","KRISTIAN",
			"EVE","JONATHON","JESSE","JOSEPHINE","YUSUF","CYNTHIA","CRISTOFER","REECE","MIA","MADDOX",
			"JALEN","KASEN","AMELIE","AIDEN","BRYANT","MARIBEL","JADE","AUGUST","SASHA","MADISYN",
			"ADONIS","CLOE","JOSELYN","KEON","AYAAN","KAMDEN","MORGAN","HOPE","AVERI","MARSHALL",
			"BRETT","LANDON","BECKHAM","MIRIAM","STEPHANIE","MADILYN","CAMRYN","KALEB","JADA","ZACKARY",
			"IZABELLA","QUINCY","MIKE","DANNA","JOLIE","KAELYN","ISLA","SAIGE","BLAINE","JAIDA",
			"KATHY","LILYANA","AZUL","HALLIE","CHANEL","MAXIMO","KAYDEN","ANGEL","MITCHELL","JOAQUIN",
			"MIYA","KAYLEIGH","LUCY","HAYDEN","ALIYAH","KARLI","HAMZA","LOGAN","RILEY","HAYLEE",
			"KYMANI","LANDYN","LORENZO","ANGELO","KANE","MCKENNA","ZOEY","BRODY","LYRIC","LANE",
			"BELEN","LEWIS","SERENA","SADIE","SAVANAH","ARNAV","SABRINA","DOMINIQUE","ARTURO","LINA",
			"KHLOE","KYLIE","CINDY","KENNEDI","REX","LILLIANA","ANABELLA","TATE","PORTER","CRISTOPHER",
			"JAYLAH","VIVIAN","JOHAN","LELAND","ALISSON","LEIA","ANDREAS","SIENA","DEEGAN","DEAN",
			"LORENA","DANIELLE","GRAHAM","BRAYLEN","BRENT","MAX","KIRSTEN","ALEJANDRA","KADEN","CASH",
			"ROSELYN","EUGENE","VIVIANA","VALERIA","RUBY","JAZLYN","EVAN","ARYANA","ALANA","SALVADOR",
			"CHARLIZE","TYRONE","CHERISH","HAROLD","HANNAH","ATTICUS","COLBY","LILLIAN","LIBBY","CAYDEN",
			"JUNIOR","KAILYN","DAMARI","KATIE","HADASSAH","KASSANDRA","CATALINA","PAIGE","ALI","JAYSON",
			"TITUS","RIGOBERTO","TYREE","YADIRA","ATHENA","SEAMUS","SHYANN","PARKER","ANNA","DAKOTA",
			"ALEXIA","RAUL","DAPHNE","JEFFERSON","KYLA","SLOANE","HAZEL","KEYON","ROWAN","EVANGELINE",
			"PRESTON","ERIN","TRINITY","ROSA","ADAN","NATHANIAL","MIKAYLA","CRISTIAN","EMERSON","BRYAN",
			"MADALYNN","LEON","HILLARY","ALICIA","CODY","MASON","JULIANNE","CRAIG","KHALIL","KARA",
			"SARAI","REBECCA","ALEXANDRA","COOPER","JAMISON","DAVIAN","RYLEIGH","NATALY","KAMRON","VIOLET",
			"LIANA","LANEY","YAEL","JORDAN","ROYCE","MARELY","NASH","LILIANA","MYLIE","RAYNE",
			"CECILIA","CAMREN","DENISE","ESSENCE","DANIKA","MARISSA","ENZO","FREDERICK","LAILA","HAILIE",
			"MALIK","GORDON","MACKENZIE","ITZEL","WARREN","MORGAN","JOHN","ANNABELLA","MIREYA","KENNA",
			"ILIANA","DANE","CAMRON","EDEN","ADRIEL","PIERRE","JONAH","KINGSTON","GIANNI","JERIMIAH",
			"DESTINEE","HAIDEN","QUINTON","AISHA","ISAAC","TALIYAH","MEGHAN","MAXIM","JENNY","PAXTON",
			"VANESSA","DEON","PHOENIX","ALLISSON","RUBI","DONALD","JAZLENE","DAYANA","KENNY","HEAVEN",
			"JULIETTE","ZION","PRESLEY","ANAYA","QUINTEN","ALLISON","KAITLYN","SANDRA","MIRA","CARMEN",
			"RONAN","DAVIS","ELIAS","LINDSAY","GENESIS","CAMERON","IZAIAH","CAMERON","LILAH","DESMOND",
			"MALEAH","SAUL","CARLIE","CARSON","DERRICK","ALEXZANDER","MCKENZIE","FRIDA","TANYA","MAKAILA",
			"ADALYN","LOGAN","RYLEE","CORTEZ","PAULINA","MADDEN","ALENA","VICTOR","ABBEY","RHIANNA",
			"ERNEST","DAVIN","MEKHI","EVELYN","ZION","MARLON","GAGE","MCKAYLA","ERIC","DAHLIA",
			"AUTUMN","LESLIE","BILLY","MADALYN","HADLEY","DAYTON","ROLANDO","KASSIDY","WALKER","ANA",
			"ESTHER","ERIK","KAMARI","AYDEN","STEPHANY","DELILAH","ANGELA","DEMETRIUS","KYSON","BRYLEE",
			"LUCIA","JOSHUA","ELAINA","ARMANI","LEILA","AMY","DARION","LEO","ZARIAH","JACQUELYN",
			"EMILIE","HENRY","REY","LAMONT","WILLIE","NIKOLAS","JAZMINE","JULIE","KRYSTAL","ESMERALDA",
			"LIVIA","EDUARDO","EASTON","CALLUM","KARLY","SALMA","LEXIE","MAREN","KARINA","ARMANI",
			"DOMINIC","RIYA","SANTINO","KYAN","ANNABEL","DANIELLA","NOAH","SETH","IBRAHIM","NOEL",
			"DEVEN","DULCE","FELIPE","LILIA","RISHI","AKIRA","JAXON","JOHNATHON","PAYTON","KEYLA",
			"RYKER","ARIELLE","AUGUSTUS","PHILIP","DAYAMI","CLARA","SKYLER","JAMIYA","ALEXANDER","CARLEE",
			"TANNER","KIMBERLY","NATALEE","ELI","STERLING","OLIVIA","DERICK","TIANA","JAY","ELIZABETH",
			"KAITLIN","JOY","ROCCO","BETHANY","BIANCA","LYLA","MISAEL","EDWARD","JOVANNI","CARLO",
			"JOSEPH","LOLA","DARNELL","SAMIR","ENRIQUE","DOMINIQUE","NATALIE","REYNALDO","DEREON","ANNABELLE",
			"KAIA","PAISLEY","BRYNN","STEVE","NEVAEH","DARIUS","DONNA","ALANNA","FELICITY","VALENTINO",
			"MATILDA","MALIA","RODRIGO","DAMION","HANA","BROGAN","AYANNA","JORDIN","DANIELA","JAMARCUS",
			"CAILYN","KAYLYN","HARLEY","LEA","LEAH","SANIYAH","AUSTIN","PAMELA","PABLO","KOLTON",
			"ALVARO","LUKA","JALIYAH","KAYLEN","ZAVIER","TARYN","DANIA","MATTIE","YUREM","ALYSSA",
			"FINLEY","ABRAM","ALLY","AMARIS","GAVEN","GIANNA","JADON","ALESSANDRA","ELLA","RAFAEL",
			"SERGIO","MARIYAH","RANDALL","JAYLYNN","BRENDON","ELIAN","BROCK","TANIA","BRYCEN","ALIJAH",
			"ELIANNA","JOEL","EMILIO","DREW","MARGARET","ARIEL","MYLES","CASEY","CADE","ASIA",
			"JENSEN","EDEN","ALDO","LENA","ALEENA","LAINEY","ADAM","FATIMA","EMILIANO","ARIA",
			"CHASITY","GISELLE","SARAHI","ARACELI","AMINA","MOHAMED","PHOENIX","MOHAMMED","BRIDGER","ALMA",
			"KAEDEN","TATUM","KARISSA","KIARA","JEFFERY","BRENNEN","RYLEE","TABITHA","LUKE","HAVEN",
			"FRANCO","DEVAN","REUBEN","OCTAVIO","ARIELLA","AHMAD","PALOMA","BRICE","MOHAMMAD","ALBERT",
			"SOLOMON","MICAH","ALEC","MARLEY","LEONEL","KATE","GIDEON","JARRETT","HOLDEN","SARA",
			"KIERSTEN","PAYTEN","JESSIE","BENTLEY","YOSELIN","ADOLFO","JAMAR","JULISSA","HECTOR","AMIYAH",
			"CORBIN","NELSON","KARMA","NICHOLAS","SULLIVAN","ZECHARIAH","MINA","JAVIER","MARCELO","MILAGROS",
			"MADELEINE","KAILA","SIMONE","AMIR","CARLEY","GARY","HEZEKIAH","IRELAND","RORY","JAX",
			"DANGELO","MCKINLEY","MARCUS","CAROLINA","MONSERRAT","JAYLEEN","GLENN","TROY","NEVEAH","CARTER",
			"REGAN","RYLAN","GIA","ALAYNA","ANIYA","ANABEL","SKYLA","TRISTON","SLADE","PIPER",
			"MELODY","NEIL","XZAVIER","FRANCIS","DIANA","JON","CARLY","SIDNEY","ZAIN","MONICA",
			"JAYCE","KIANNA","ASPEN","KASEY","JEWEL","RODERICK","BAILEY","JAIDEN","TRYSTAN","CHARLOTTE",
			"DEACON","SELAH","DAMARION","AMARA","JERAMIAH","AUBRIE","MATTEO","ALISA","NATHALY","LIAM",
			"NATHAN","CAIDEN","NASIR","HEATH","MARQUES","KINSLEY","JANAE","MARVIN","MARY","ASHANTI",
			"JAIDYN","RAEGAN","KEVIN","BROOKS","HAILEY","TOMAS","INGRID","ZACHERY","FRANKIE","LILIAN",
			"CARMELO","SERENITY","YARITZA","DARIO","ELISA","HARRISON","TRISTAN","JERRY","JAYLIN","MARILYN",
			"JEREMY","TEAGAN","ZACHARIAH","ASHLEE","AYLA","KATELYN","GAEL","JAYDEN","ANGEL","ABIGAYLE",
			"MICHELLE","MARIELA","REYNA","ALEAH","NORA","PHILLIP","HELEN","COLIN","CARINA","YADIEL",
			"ADDISON","KAMILA","TREY","SHYANNE","MELANY","LIA","PIERCE","PAITYN","JAMIR","JOCELYN",
			"BRYCE","ALFRED","NORAH","JAYDEN","DILLON","LEROY","ELSA","DENZEL","MATHIAS","KEATON",
			"WILL","JUDITH","GISSELLE","MEMPHIS","KIRA","DEANDRE","TIA","MARTIN","KARLIE","FINN",
			"GAIGE","NOLAN","SHANE","ANASTASIA","URIAH","GRACIE","ELIEZER","BRYSON","HARPER","KAYLYNN",
			"LAYNE","LINCOLN","EDGAR","ANNE","VERONICA","MIKAELA","TREVON","TOBY","ZANIYAH","KAITLYNN",
			"DAWSON","COREY","KAREN","XAVIER","AMANI","NYLA","BRIELLE","BRAXTON","EFRAIN","SAMUEL",
			"AMARE","KOEN","WILLIAM","JAYLENE","BAYLEE","CRUZ","DESIRAE","MACEY","CHELSEA","BECKETT",
			"SAM","EZRA","VALERIE","JULIO","ADELYN","ANDRE","DEMARION","NICO","DAMARIS","JAN",
			"LARRY","JAMES","SAWYER","JULIUS","HASSAN","ZARA","CHAD","QUINTIN","ALISSA","KRISTINA",
			"KATELYNN","MAVERICK","COLEMAN","JOCELYNN","JEROME","SHELBY","SHAYLEE","KAYLEY","ISAIAH","TERRY",
			"DALE","CLARISSA","LAILAH","KENDALL","JADIEL","LEILANI","GEMMA","BRANSON","RAQUEL","RAYMOND",
			"WYATT","BRIAN","KALEY","EMELIA","LAURA","MARIAH","SAMSON","EMMALEE","JAELYN","BEN",
			"TEAGAN","BRITNEY","MATTHEW","KARSON","TREVIN","KAYLIN","MACY","ARELY","ROHAN","SANTIAGO",
			"DONAVAN","MIRACLE","MAURICIO","ARABELLA","TANIYAH","EMELY","ROY","MADELYN","LACI","SAMANTHA",
			"JAYCEE","ISABELL","AUBREY","SKYE","ADEN","SKYLAR","RIHANNA","MYLA","PAOLA","AIDYN",
			"BRAELYN","SCOTT","KYLER","MOSHE","WENDY","EMMANUEL","RODOLFO","EMMY","PHOEBE","FRANK",
			"AMERICA","AMARI","LETICIA","CARLEIGH","ADITYA","MAXWELL","ETHAN","CHASE","DAMIEN","ELIJAH",
			"JAYLA","GUSTAVO","HALEY","CARISSA","JASMIN","ERIKA","LAWRENCE","SHILOH","RAINA","KARSYN",
			"CLINTON","ARYANNA","DAVID","LORELEI","ISRAEL","ESTEBAN","SAMARA","DEMARCUS","LEONIDAS","CHEYENNE",
			"ARIANNA","DEREK","TAYLOR","COLTEN","SAGE","ELEANOR","MARCEL","ROSS","MAKENNA","DIXIE",
			"MOISES","JAEDEN","MARQUISE","MILA","KENDALL","JACOBY","BRAYLON","HOLLY","ASHLYNN","BREANNA",
			"MAXIMUS","KELVIN","CAYLEE","CHACE","DAVION","ASHER","MARELI","LAYLA","DANICA","EMMETT",
			"DENNIS","KEENAN","PARKER","IMANI","EMMA","ALLAN","GABRIEL","DYLAN","TREVOR","CHANCE",
			"MADYSON","ALIANA","LONDON","LUCA","BRADLEY","HELENA","AZARIA","ARIEL","GUNNAR","LEVI",
			"DOUGLAS","MATEO","GIANCARLO","ANGELINA","DESTINY","LEONARD","GRETA","BRUNO","XANDER","DESIREE",
			"ADRIANNA","ANDRES","JAZLYNN","RODNEY","DAMIAN","JAQUAN","GRADY","ESPERANZA","RONIN","MAKENZIE",
			"AYLIN","ODIN","EMILEE","SHAYLA","AALIYAH","RYLIE","LINDA","KAYDEN","ERICA","KENDRA",
			"KYRA","ANGELICA","JETT","BRAYDEN","ETHEN","BRADY","LEONARDO","MYAH","JAKOB","KASON",
			"TESSA","DEXTER","SEAN","KADENCE","MILEY","GUADALUPE","RYAN","JANIAH","CHRISTINE","KAI",
			"CAROLYN","JARED","ROSE","ZARIA","MATHEW","JUDE","KEELY","DARIEN","RUBEN","KAMRYN",
			"DALIA","KAYLEE","TURNER","JAYDIN","KAYDENCE","IZAYAH","GLORIA","NIGEL","SYLVIA","JOSIE",
			"ROWAN","RYLAND","DEANNA","EMERY","ABRIL","ABIGAIL","MALIYAH","KAIDEN","TAYLOR","KEEGAN",
			"LEXI","BARRETT","MOSES","TONY","MOLLIE","JADYN","EDDIE","DRAKE","CHAZ","MATTHIAS",
			"FLETCHER","PAULA","LANDEN","SHELDON","PETER","MEGAN","JORGE","GUILLERMO","VAUGHN","TYRESE",
			"BRENDA","KALLIE","KONNER","LEANDRO","JONATHAN","NIKO","KAYA","WILLOW","NATHEN","JAVON",
			"KELLEN","ADISON","BARON","SANIYA","MUHAMMAD","BRONSON","URIJAH","JAKOBE","MARIE","ALANNAH",
			"NOLA","ANYA","ISAI","EAN","MALCOLM","TIFFANY","MARINA","JACK","JAYLYN","RUSSELL",
			"CARLOS","BLAZE","NOELLE","MALACHI","JULIEN","BARBARA","SAVANNAH","CATHERINE","JOVANI","JANE",
			"KODY","MADELINE","ULISES","EMANUEL","DALLAS","RACHAEL","MAYA","EZEKIEL","LIZBETH","WESTON",
			"AIYANA","ANABELLE","DORIAN","PEDRO","JADEN","JILLIAN","MICHEAL","CASE","GWENDOLYN","CRYSTAL",
			"ANDREA","ALEX","AMIRAH","JAIR","REBEKAH","SONIA","MESSIAH","RENE","SHAUN","JAYLEN",
			"NAYELI","CORA","CRISTAL","CALE","MATIAS","MARIO","REGINALD","AVERY","CIERRA","FABIAN",
			"SINCERE","KOLBY","CAMDEN","KATHRYN","NIKHIL","FRANKLIN","IZABELLE","MARISA","HALLE","ALI",
			"HEIDY","TERESA","MERCEDES","TIARA","GAVYN","CAROLINE","TERRANCE","ALIVIA","ORLANDO","SHAWN",
			"KILLIAN","KRISTA","KATHLEEN","MARIA","STANLEY","LONDON","RHETT","BRADEN","APRIL","ZANDER",
			"KELTON","NAIMA","JOE","BRENTON","REAGAN","BELLA","CAMILLA","VICENTE","BRENDAN","NATALIA",
			"AARAV","NICKOLAS","EVELIN","RICHARD","CEDRIC","ALONDRA","ISMAEL","KIERA","KARLEE","VINCENT",
			"ALLEN","CASEY","CHARITY","JOVAN","KADE","ASHLY","KAMERON","TARA","CHRIS","PRINCESS",
			"GAUGE","ZOIE","LAYTON","MIGUEL","AIMEE","JASE","JAZMYN","ABRAHAM","DOMINICK","JEAN",
			"MARQUIS","OSCAR","GILLIAN","ISIAH","PEYTON","LINDSEY","DWAYNE","KRISTEN","NICOLE","KOLTEN",
			"YARETZI","COLE","MAXIMILLIAN","AUDRINA","HAYLIE","LANA","LUCIANO","JANESSA","ISAIAS","BRENNA",
			"MARK","TRENT","MADDISON","TOMMY","THERESA","KIANA","DARREN","TANIYA","CALLIE","ADRIENNE",
			"TRISTEN","COBY","THALIA","ADELINE","CELIA","KEAGAN","REGINA","ARON","CLARE","CAITLYN",
			"AUDREY","SYDNEE","JAVION","DANA","CANNON","ASA","KADIN","JUSTICE","TRENTON","RONNIE",
			"SHIRLEY","JAMIE","PATRICK","CHRISTIAN","KALIYAH","SUSAN","KENNETH","RYDER","JEFFREY","ANN",
			"HAYDEN","ZAYDEN","MARKUS","LONDYN","AVA","GRACELYN","ALIZA","LYRIC","RAMIRO","NYASIA",
			"RACHEL","BRODIE","NATHANIEL","JUSTIN","CHAIM","DONOVAN","ALFREDO","COHEN","AILEEN","DARRYL",
			"TRIPP","GERALD","NINA","DEBORAH","SKYLER","ROSEMARY","BRYNLEE","JASPER","MAXIMILIAN","RAIDEN",
			"ANNIKA","KAEL","RAELYNN","LEE","GILBERT","ANSLEY","IMMANUEL","RIVER","ELVIS","HALEIGH",
			"HEIDI","PENELOPE","SILAS","JORDYN","ANNIE","FINNEGAN","AVERIE","BELINDA","MARCO","MARCOS",
			"ROMEO","LUZ","MANUEL","ARELI","ADYSON","MAURICE","BROOKE","BRIDGET","GAVIN","SHAMAR",
			"ANGELINE","JERMAINE","CHRISTOPHER","AMIAH","JAMIE","DEVYN","KARLA","KAMARI","WESLEY","RAYNA",
			"IAN","ROGELIO","ALLIE","MARISOL","SOREN","ANNALISE","MILO","HARPER","KOLE","EILEEN",
			"KELLY","GERMAN","BEATRICE","CASON","GABRIELLA","KIERAN","ABAGAIL","NATASHA","LUKAS","XIOMARA",
			"GIULIANA","LUCILLE","ALLYSON","MELANIE","STELLA","ABBIE","KENDRICK","JONAS","ARYAN","GILBERTO",
			"KALI","WAYNE","KALEIGH","ADA","LUCIAN","GIANA","ALIYA","CONRAD","JOURNEY","NADIA",
			"SHANIA","ISHAAN","PAYTON","EVA","WILSON","JESUS","MADELYNN","RILEY","ANTHONY","CULLEN",
			"CIARA","SELINA","TRACE","DAMON","DARWIN","GUNNER","KONNOR","DIYA","CLAUDIA","DIEGO",
			"AMELIA","JOYCE","DANNY","LAURYN","JANIYA","HARRY","IRIS","TALAN","HUDSON","KENLEY",
			"JAGGER","ALANI","VIRGINIA","BRIANNA","QUENTIN","LANCE","MELINA","ALICE","TORI","URIEL",
			"JULIAN","CHARLES","DUNCAN","ELLIE","JOHNNY","LITZY","MALAKAI","ISSAC","CONNOR","DYLAN",
			"BO","CAMRYN","GRAYSON","ADDYSON","JAYLEN","NATHALIA","JOHNATHAN","TRISTIN","BRITTANY","RALPH",
			"SONNY","KAREEM","ABEL","AARON","JAYDA","EVIE","ELENA","DESTINEY","MARIAM","JOVANY",
			"SHERLYN","EDWIN","CALVIN","AMBER","ANIYAH","MOLLY","BRENDEN","ELSIE","ABDULLAH","DANIEL",
			"STACY","CALEB","SYDNEY","GABRIELLE","LAUREN","ANTONY","BRENNAN","ANIKA","NAOMI","KADYN",
			"CARL","ASHLEY","ISABELA","RYAN","ELIZA","CHLOE","JACE","MEADOW","ALYVIA","ASHLEIGH",
			"SHANNON","GERARDO","ELYSE","BRAYAN","BENNETT","JAQUELINE","KAILEE","CARLA","LUIS","HAILEE",
			"MARLEY","MAGDALENA","MICHAELA","LORELAI","YULIANA","MAKENA","RAY","CADENCE","MADISON","ESTRELLA",
			"REED","RANDY","JUSTICE","JAMARI","LUNA","EMILIA","RAMON","JENNA","ANAHI","LILLIANNA",
			"QUINN","ALYSON","LESLY","TIMOTHY","SIENNA","KING","ZOE","DOMINIK","INDIA","NATALYA",
			"SCARLET","JASMINE","ZACKERY","MARA","PRECIOUS","GENEVIEVE","JADYN","ISIS","SARIAH","JACOB",
			"ISABEL","JAIRO","YESENIA","HOUSTON","NOEMI","AVAH","DAKOTA","ASHTON","RUTH","ASHTYN",
			"AMAYA","VALENTINA","TODD","GRACE","LIBERTY","JAYDON","WADE","LAWSON","COURTNEY","ISABELLE",
			"BRODERICK","DONTE","DEJA","JAIME","ZAID","ANDY","JIMENA","SIMON","GEOVANNI","BRANDEN",
			"KENDAL","YANDEL","KIMORA","AUBREE","NICOLAS","HANNA","MICAELA","LAYLAH","SELENA","KIAN",
			"RAPHAEL","SHAYNA","REILLY","KAILEY","CORINNE","WHITNEY","SHEA","KATHERINE","ELLEN","ARACELY",
			"CASSANDRA","JAZMIN","ANTON","FRANCISCO","JOSUE","JOSIAH","CHARLIE","JAMAL","REESE","MORIAH",
			"ARJUN","JOEY","LACEY","BAILEE","ADRIANA","EDITH","JORDEN","CLAYTON","DAVON","ANTWAN",
			"REMINGTON","ANGELIQUE","GRANT","JULIANA","ALFONSO","NATHALIE","SANAI","CHRISTINA","ABBY","THEODORE",
			"ANDREW","DENISSE","SAGE","RHYS","AYDAN","VICTORIA","JANET","NEHEMIAH","DECLAN","MAKAYLA",
			"DEVON","KAYLAH","BRISA","RICKY","JUAN","TRISTIAN","JAIDEN","LILIANNA","ALAINA","PEYTON",
			"AHMED","AMYA","CORDELL","ROBERTO","MARLEE","IYANA","CRISTINA","FRANCESCA","KENNEDY","ADDISYN",
			"ALINA","JULIANNA","DASHAWN","SKYLAR","REID","TOBIAS","LUCIANA","FELIX","JOANNA","ROLAND",
			"SOFIA","CHANDLER","CORNELIUS","JENNIFER","REAGAN","JABARI","JOVANNY","LILLIE","DAYANARA","SPENCER",
			"JOSE","SARAH","OWEN","GABRIELA","BOSTON","JORDON","HUGO","ADRIAN","ALONSO","AIDAN",
			"OSWALDO","ALISHA","VANCE","NATHANAEL","NYLAH","JAKAYLA","SIDNEY","KAYLA","DALTON","LILY",
			"CLARENCE","LUCAS","FINLEY","JAYLEE","GRIFFIN","ELISABETH","CURTIS","DUSTIN","JOSLYN","BYRON",
			"COLTON","KEIRA","LYDIA","MACI","LENNON","SAVANNA","BRAYDON","ARI","ROMAN","CLARK",
			"GEORGE","MAIA","JULIET","JADEN","JAMARION","MARIANA","ERNESTO","LANDIN","MICAH","JUSTINE",
			"SAMMY","JAYDAN","RASHAD","KENZIE","FERNANDO","OLIVER","NICK","DIAMOND","YAMILET","JESSICA",
			"DARRELL","KATRINA","ARTHUR","KYLAN","EMERY","YAZMIN","MILTON","JULIA","VALENTIN","SHYLA",
			"TYSON","FAITH","KAIYA","ROGER","IRENE","KELSEY","RONALD","FREDDY","GRETCHEN","CONNER",
			"ADALYNN","MARLENE","JAIDYN","BERNARD","SANTOS","JUNE","JAKE","YAIR","SAVION","MIAH",
			"THADDEUS","PATIENCE","MADILYNN","CARA","WALTER","ERICK","OMAR","ALEXIS","JANELLE","STEPHEN",
			"YARELI","ARMANDO","ANDERSON","TIANNA","RYANN","HARMONY","LISA","ELLE","KYLEIGH","NIA",
			"ANGIE","BAILEY","JESSIE","DAX","MALLORY","KARLEY","WAYLON","MARIANNA","GEORGIA","ELAINE"


	};
	public static String[] lname = {

			// names taken from https://www.randomlists.com/last-names

			"FRYE","ROBERSON","FRITZ","IRWIN","ASHLEY","BALL","BOYD","THOMAS","WEBSTER","SHAW",
			"OWEN","CRAWFORD","BERG","PECK","SHANNON","CRAIG","WOODARD","HESS","MORGAN","MOLINA",
			"RAMOS","RODRIGUEZ","EVERETT","STANTON","RAYMOND","ONEILL","SKINNER","HAYES","SNOW","ZHANG",
			"STONE","KEMP","MILLER","FIELDS","MURILLO","WEAVER","HALL","LOWE","PROCTOR","CHRISTIAN",
			"KEY","PATEL","CUMMINGS","BAKER","ACEVEDO","LARSEN","HARRELL","JENNINGS","KLINE","NEAL",
			"CHANDLER","HO","KANE","PERRY","TODD","GALVAN","CONNER","DONALDSON","BARKER","GRIFFIN",
			"CHASE","WALLS","CRUZ","GOMEZ","MCDOWELL","SMITH","BENITEZ","KNIGHT","JIMENEZ","BARAJAS",
			"VINCENT","CONTRERAS","COX","HOLMES","FISCHER","TERRY","FERRELL","HUANG","SAMPSON","HOGAN",
			"FERGUSON","MCLAUGHLIN","BROOKS","EDWARDS","LYNN","BRANCH","CAMPBELL","RYAN","MCKEE","HAYDEN",
			"CLAY","ARMSTRONG","WALLER","FOX","DAVID","BRAY","MIDDLETON","PEREZ","SIMPSON","SILVA",
			"BAXTER","MERRITT","HANNA","WALKER","OLIVER","LONG","CHAMBERS","BRADFORD","ORR","SHIELDS",
			"LANDRY","NICHOLSON","CARPENTER","CARNEY","ANDERSON","WILLIS","BOLTON","HORN","ALI","ORTIZ",
			"MARQUEZ","NICHOLS","CASEY","PINEDA","DAVIES","TRAN","HAWKINS","KELLEY","HURST","NORTON",
			"ALEXANDER","ONEAL","FRENCH","BUCHANAN","HAYNES","HIGGINS","ADAMS","DELACRUZ","BRUCE","BOYER",
			"MARKS","THOMPSON","SCHULTZ","HOWELL","DANIELS","CLARK","SHAH","MOYER","POLLARD","MCGUIRE",
			"CARTER","BOWMAN","JEFFERSON","BURNETT","CHAVEZ","BLANCHARD","MCLEAN","LEONARD","COCHRAN","ROSE",
			"WOLFE","CHOI","GROSS","VAZQUEZ","DUFFY","MELENDEZ","MCBRIDE","LEVINE","JACOBS","CLINE",
			"HURLEY","HILL","PENNINGTON","UNDERWOOD","SELLERS","WRIGHT","ALLEN","HODGE","CASE","KERR",
			"FREY","REEVES","ADKINS","TAYLOR","GAINES","IBARRA","WHITE","MENDOZA","KHAN","LEACH",
			"KOCH","LUCAS","CARDENAS","STAFFORD","YODER","CANNON","COOKE","GUZMAN","WAGNER","DIAZ",
			"ESPARZA","BOOKER","RUSH","SHARP","BRENNAN","GOLDEN","REED","DAVENPORT","MCCLAIN","CHAN",
			"THORNTON","HENRY","SHEA","WONG","COHEN","PENA","HUMPHREY","TUCKER","BENDER","LEWIS",
			"DOMINGUEZ","FLOYD","LOVE","VASQUEZ","SUTTON","ROACH","STEPHENSON","FORBES","MCCANN","RICHMOND",
			"OWENS","DUDLEY","CORTEZ","SHEPARD","BUTLER","MARSH","FULLER","MALDONADO","POTTER","WALTER",
			"WILLIAMS","CALDWELL","JENKINS","CHANEY","WARD","BLACKWELL","HUDSON","VILLEGAS","HARDY","BOWERS",
			"ROSS","CAIN","HANSON","COFFEY","MCKENZIE","FRANK","HAYS","SCHNEIDER","ESPINOZA","SCHROEDER",
			"SWEENEY","DEAN","HENSLEY","ARELLANO","COLLINS","RICE","BRAUN","MOON","GARRISON","SPENCER",
			"CARLSON","MACIAS","BRIDGES","BECKER","KIRK","MAYO","DENNIS","BULLOCK","MATTHEWS","BENTLEY",
			"PRINCE","KRUEGER","RAMIREZ","VARGAS","BRADLEY","MCCALL","MORENO","MILES","BROCK","COWAN",
			"KRAMER","RICHARDS","DOUGHERTY","RIVERA","FOLEY","MCCARTHY","CHERRY","BLEVINS","CORDOVA","SAVAGE",
			"BISHOP","PACHECO","HUYNH","CLEMENTS","JACOBSON","BEARD","DOUGLAS","ERICKSON","KIM","GLOVER",
			"FIGUEROA","BONILLA","BERNARD","PITTMAN","STEELE","MONTGOMERY","FRANCIS","PITTS","SANCHEZ","FITZPATRICK",
			"ORTEGA","DANIEL","BENJAMIN","HARRINGTON","BYRD","BLACK","DURAN","BELL","CISNEROS","TORRES",
			"RIVAS","NUNEZ","BECK","STANLEY","BENNETT","BROWNING","CONLEY","HARPER","HESTER","BARNES",
			"CONRAD","STEVENSON","PRATT","WISE","HAMILTON","WOODS","MARSHALL","ROMERO","STARK","MILLS",
			"CALHOUN","CASTANEDA","HOOVER","DAVILA","OCONNOR","SAWYER","SANDOVAL","WEEKS","FOSTER","NASH",
			"SCHWARTZ","WATTS","DALTON","TURNER","RIDDLE","BALLARD","SOLIS","RANGEL","PATTERSON","ENGLISH",
			"GALLOWAY","HATFIELD","RIVERS","BOWEN","PATTON","FARRELL","ESTRADA","EWING","BURTON","GALLEGOS",
			"WOODWARD","BAUER","MCCOY","GORDON","FITZGERALD","LIVINGSTON","REESE","HOUSE","COPELAND","BUCKLEY",
			"DIXON","ALVARADO","MORA","HERMAN","GOOD","MOSS","DODSON","MCINTYRE","ARCHER","BARRERA",
			"MORRISON","SIMS","SLOAN","JOSEPH","BAILEY","PEARSON","CHAPMAN","LIN","OLSON","CAMACHO",
			"FLYNN","JOYCE","BRIGHT","PORTER","WYATT","BANKS","WALL","HUBER","GIBSON","ZIMMERMAN",
			"GARNER","SUAREZ","DECKER","ELLIOTT","MEJIA","MONTOYA","CARROLL","MAY","VALENZUELA","COMBS",
			"VANCE","VILLARREAL","BATES","ODOM","MCKAY","YATES","ATKINSON","BRYAN","BARR","OCHOA",
			"CARSON","MYERS","LEBLANC","SCOTT","ROWE","WELCH","INGRAM","FLOWERS","DICKERSON","GAY",
			"ROBINSON","GRIMES","MOSLEY","DUKE","RUBIO","PARRISH","ACOSTA","MOODY","HOPKINS","MERCADO",
			"BURGESS","HALE","GOULD","KENT","LINDSEY","ELLIS","GRIFFITH","BAIRD","STRICKLAND","MCGEE",
			"FRANKLIN","DURHAM","GRAHAM","SALAZAR","OLSEN","SMALL","PAYNE","BLAKE","FUENTES","BRADY",
			"MAYER","HENDRIX","FLETCHER","SANTANA","GREENE","LLOYD","DONOVAN","TRUJILLO","ROCHA","DORSEY",
			"AVERY","LAM","FINLEY","GUTIERREZ","RUSSO","GRAY","HOOD","LYONS","REYES","RIOS",
			"SCHMIDT","RANDOLPH","WOOD","SOTO","BRADSHAW","MEADOWS","CHEN","GREGORY","GILMORE","JONES",
			"HUNTER","RILEY","STEVENS","CANTU","DOYLE","WARREN","DICKSON","HOFFMAN","MORROW","GILL",
			"MONROE","MATHEWS","HANSEN","PRESTON","MUNOZ","SERRANO","FRANCO","FRIEDMAN","CHURCH","ZAMORA",
			"PETERSEN","MANN","ARNOLD","HERNANDEZ","DELGADO","WADE","JARVIS","LYNCH","TRAVIS","HULL",
			"CURRY","ELLISON","LANE","FORD","HOLDEN","ABBOTT","GLENN","MAXWELL","WEBER","COOLEY",
			"KELLY","MANNING","SALINAS","ATKINS","WARE","NEWTON","SANDERS","REILLY","HEATH","MCCORMICK",
			"MCNEIL","MCMILLAN","MORAN","OCONNELL","OBRIEN","RAMSEY","FLEMING","PIERCE","DRAKE","HANEY",
			"AYERS","WATSON","KNAPP","CUNNINGHAM","KEITH","WEST","GARZA","CONWAY","WILLIAMSON","HODGES",
			"LARA","MADDOX","CHUNG","MCINTOSH","NELSON","RODGERS","WILCOX","SNYDER","CALLAHAN","WILKINSON",
			"RICHARDSON","HOLT","WATERS","JOHNSON","CANTRELL","SCHAEFER","BRYANT","HARRISON","RICHARD","HARRIS",
			"FRAZIER","LITTLE","MCKINNEY","MORSE","AGUIRRE","BERRY","LAMBERT","NOVAK","GILBERT","KENNEDY",
			"EVANS","REYNOLDS","PARSONS","DUARTE","YU","LUTZ","PRICE","GRANT","NIELSEN","PAUL",
			"SANFORD","MCMAHON","FAULKNER","WILSON","VANG","MEYERS","CAREY","ALLISON","JENSEN","VELEZ",
			"HOLLOWAY","LEON","GOODWIN","MOORE","POTTS","BARRON","TOWNSEND","BOND","TREVINO","BEASLEY",
			"HAMMOND","COSTA","VALENCIA","AVILA","COMPTON","BEST","DOWNS","HUBBARD","PETERS","MASSEY",
			"PERKINS","ROBBINS","PATRICK","CASTRO","COLLIER","PRUITT","WIGGINS","POOLE","STRONG","HARVEY",
			"VEGA","MCCONNELL","CLAYTON","MURPHY","POPE","MAYNARD","BASS","JOHNS","LOWERY","NIXON",
			"GARDNER","RICH","RASMUSSEN","POWELL","BARTON","JAMES","DILLON","KIRBY","ARIAS","MADDEN",
			"PUGH","MACDONALD","BALDWIN","GUERRERO","PARKER","SINGLETON","HUGHES","NAVARRO","WHITAKER","JORDAN",
			"HARDIN","GILLESPIE","HALEY","SANTOS","VAUGHN","ARROYO","SOSA","ANDRADE","ZUNIGA","YANG",
			"OSBORNE","HUNT","HUTCHINSON","LARSON","CAMERON","TANNER","FISHER","JOHNSTON","CUEVAS","REID",
			"MALONE","HOLLAND","SHEPPARD","MERCER","MORRIS","KIDD","MARTINEZ","DYER","STOKES","ESTES",
			"SCHMITT","MCDONALD","BELTRAN","AYALA","HINTON","FLORES","SAUNDERS","MULLEN","MORALES","VAUGHAN",
			"CURTIS","GLASS","MITCHELL","MCKNIGHT","RIGGS","KRAUSE","ODONNELL","MCGRATH","PONCE","CABRERA",
			"ROWLAND","BAUTISTA","GUERRA","CASTILLO","WALTON","QUINN","RAY","ROJAS","FREEMAN","BOYLE",
			"HENDERSON","SULLIVAN","OSBORN","WATKINS","LIU","MEZA","MEDINA","ZAVALA","GONZALES","RANDALL",
			"VELAZQUEZ","ROSARIO","SWANSON","MASON","VALDEZ","LAWRENCE","BRIGGS","WALTERS","JACKSON","HARTMAN",
			"CHRISTENSEN","GIBBS","TERRELL","GALLAGHER","AGUILAR","DAUGHERTY","NOBLE","SHELTON","BLANKENSHIP","LOGAN",
			"LE","WHITNEY","PAGE","LAMB","HOWARD","FERNANDEZ","POWERS","HOLDER","WILKERSON","MUELLER",
			"ROBLES","SHERMAN","STUART","BRANDT","PADILLA","BURKE","SPENCE","HARMON","NEWMAN","WINTERS",
			"MCCULLOUGH","COLEMAN","GREEN","HUERTA","DUNN","LESTER","WELLS","LUNA","LOZANO","KLEIN",
			"BOONE","NORRIS","ROLLINS","FRY","CROSBY","RUIZ","RUSSELL","BOOTH","HICKS","HOWE",
			"EATON","LOPEZ","HART","PETERSON","MCFARLAND","HINES","COOK","LI","GATES","SIMON",
			"HEBERT","HOUSTON","HORTON","HICKMAN","GARCIA","COBB","PARKS","TAPIA","GILES","BEAN",
			"MIRANDA","HOBBS","BLACKBURN","NORMAN","ROBERTSON","VILLANUEVA","STOUT","FARMER","MORTON","MURRAY",
			"PARK","WERNER","GREER","WANG","WHEELER","BREWER","SHAFFER","ROY","STEWART","VILLA",
			"VALENTINE","KAUFMAN","DAY","GEORGE","MOONEY","WALSH","NOLAN","HENSON","HENDRICKS","SPEARS",
			"BROWN","MACK","PACE","PHILLIPS","MCPHERSON","ANTHONY","WEISS","MULLINS","HOOPER","SHORT",
			"SPARKS","CALDERON","WHITEHEAD","HAAS","ANDERSEN","WARNER","ANDREWS","RHODES","MONTES","WU",
			"COOPER","DAWSON","HARDING","HUFF","HORNE","LANG","LAWSON","DAVIDSON","CHANG","GONZALEZ",
			"GENTRY","DAVIS","FARLEY","PHELPS","WILEY","MELTON","CROSS","KAISER","MEYER","BENSON",
			"KNOX","MCCLURE","FROST","ESCOBAR","MARTIN","LEVY","PHAM","CARRILLO","DUNLAP","STEIN",
			"COLE","BURNS","DELEON","BARBER","TATE","MICHAEL","HANCOCK","BARRY","RITTER","COLON",
			"CAMPOS","WOLF","BENTON","MAHONEY","BLAIR","CERVANTES","BIRD","SIMMONS","LUCERO","KELLER",
			"GRAVES","BARTLETT","HERRING","MATHIS","CARR","BARNETT","NGUYEN","WEBB","VELASQUEZ","SINGH",
			"HERRERA","FOWLER","MCDANIEL","OROZCO","GOODMAN","CLARKE","YORK","BERGER","WALLACE","SEXTON",
			"ROMAN","HUFFMAN","MOSES","PETTY","CRANE","ROGERS","BURCH","WILKINS","BUCK","SALAS",
			"GARRETT","STEPHENS","MAYS","JUAREZ","BUSH","HAMPTON","SANTIAGO","GAMBLE","PALMER","YOUNG",
			"MCCARTY","SHEPHERD","SUMMERS","FREDERICK","ROBERTS","SOLOMON","ROTH","DUNCAN","HAHN","CHARLES",
			"TYLER","KING","BARRETT","AUSTIN","MATA","WASHINGTON","LEE","MENDEZ","ROSALES","ALVAREZ"

	};

	public static  String [] address = {
			"Berkshire Street","Mechanic Lane","Arlington Ave","Cedar Lane","Greystone Avenue",
			"First Ave","Belmont Ave","Ashland St","Lankershim Ave","Glen Creek St.","Holly St.",
			"Princess Ave. ","Chestnut St. ","Windsor Avenue ","West Street ","Iroquois St. ","Fordham Road ",
			"Washington Street ","Edgemont Street ","Spring Street","Fawn Court","Strawberry Street ",
			"Virginia Ave.","Woodsman Ave.","La Sierra Street","West Newcastle Ave.","Wall Street",
			"Mayfield Court","Maple Avenue","Washington Circle Oceanside"



	};
	public static String state [] ={
			"CA","GA","NY","MI","NE","AL","AZ","AR","CO","DE","ID","LA","MA","NV","ND","OK","TX","VT","WI","SD","RI"
	};





	public static String [] city = {
			"Ackley","Ackworth","Adair","Adel","Afton","Agency","Ainsworth",
			"Akron","Albert City","Albia","Albion","Alburnett","Alden","Alexander",
			"Algona","Alleman","Allerton","Allison","Alta","Alta Vista","Alton","Altoona",
			"Alvord","Amana","Ames","Anamosa","Blockton","Bloomfield","Blue Grass","Bode","Bolan",
			"Bonaparte","Bondurant","Boone","Bouton","Boxholm","Boyden","Braddyville","Bradford","Bradgate",
			"Brandon","Brayton","Breda","Bridgewater","Brighton","Bristow","Britt","Bronson","Brooklyn",
			"Brunsville","Buckeye","Buck Grove","Buffalo","Buffalo Center","Burchinal","Burlington","Burr Oak",
			"Burt","Bussey","Calamus","California Junction","Callender","Calmar","Calumet","Camanche","Cambridge",
			"Cantril","Carbon","Carlisle","Carpenter","Carroll","Carson","Carter Lake","Cascade","Casey","Castalia",
			"Castana","Cedar Falls","Cedar Rapids","Center Junction","Center Point","Centerville","Central City","Centralia",
			"Chapin","Chariton","Charles City","Charlotte","Charter Oak","Chatsworth","Chelsea","Cherokee","Chester","Chillicothe",
			"Churdan","Cincinnati","Clare","Clarence","Clarinda","Clarion","Clarksville","Clayton","Clearfield","Clear Lake","Cleghorn",
			"Clemons","Clermont","Climbing Hill","Clinton","Clio","Clive","Clutier","Coalville","Coburg","Coggon","Coin","Colesburg",
			"Colfax","College Springs","Collins","Colo","Columbus City","Columbus Junction","Colwell","Conesville",
			"Conrad","Conroy","Conway","Coon Rapids","Coppock","Coralville","Corley","Corning","Correctionville",
			"Corwith","Corydon","Cotter","Coulter","Council Bluffs","Craig","Crawfordsville","Crescent","Cresco","Creston",
			"Cromwell","Crystal Lake","Cumberland","Cumming","Curlew","Cushing","Cylinder","Dakota City","Dallas Center",
			"Dana","Danbury","Danville","Davenport","Davis City","Dawson","Dayton","Decatur City","Decorah","Dedham",
			"Deep River","Defiance","Delaware","Delhi","Delmar","Deloit","Delphos","Delta","Denison","Denmark","Denver",
			"Derby","Des Moines","De Soto","De Witt","Dexter","Diagonal","Diamondhead Lake","Dickens","Dike","Dixon","Dolliver",
			"Donahue","Donnellson","Doon","Douds","Dougherty","Dow City","Dows","Drakesville","Dubuque","Dumont","Duncan",
			"Duncombe","Dundee","Dunkerton","Dunlap","Durango","Durant","Dyersville","Dysart","Eagle Grove","Earlham",
			"Earling","Earlville","Early","East Amana","East Peru","Eddyville","Edgewood","Elberon","Eldon","Eldora","Eldridge",
			"Elgin","Elkader","Elkhart","Elk Horn","Elkport","Elk Run Heights","Elliott","Ellston","Ellsworth","Elma","Ely",
			"Emerson","Emmetsburg","Epworth","Elkhart","Elk Horn","Elkport","Elk Run Heights","Elliott","Ellston","Ellsworth",
			"Elma","Ely","Emerson","Emmetsburg","Epworth","Essex","Estherville","Evansdale","Everly","Exira","Exline","Fairbank",
			"Fairfax","Fairfield","Farley","Farmersburg","Farmington","Farnhamville","Farragut","Fayette","Fenton","Ferguson","Fertile",
			"Floris","Floyd","Lost Nation","Loveland","Lovilia","Lowden","Low Moor","Luana","Lucas","Luther","Lu Verne","Luxemburg",
			"Luzerne","Lynnville","Lytton","Macedonia","Macksburg","Madrid","Magnolia","Maharishi Vedic City","Malcom","Mallard","Maloy",
			"Malvern","Manchester","Manilla","Manly","Manning","Manson","Mapleton","Maquoketa","Marathon","Marble Rock","Marcus","Persia",
			"Peterson","Pierson","Pilot Mound","Pioneer","Pisgah","Plainfield","Plano","Pleasant Hill","Pleasanton","Pleasant Plain",
			"Pleasantville","Plover","Plymouth","Pocahontas","Polk City","Pomeroy","Popejoy","Portland","Portsmouth","Postville","Prairieburg",
			"Prairie City","Prescott","Preston","Primghar","Princeton","Promise City","Protivin","Pulaski","Quasqueton","Quimby"


	};

	public static String dept [] = 
		{
				"Academic Advisement","Academic Affairs","Academic Success Center","Accountability and Assessment",
				"Accounting, Economics & Finance","Administration and Finance","Admissions Undergraduate","Advancement",
				"Affirmative Action","African & African-Amer Studies","Alumni Relations","Anthropology","Art",
				"Arts, Humanities, Social Sciences (School of The)","Arthur O Eve - E O P Program","Athletics","Biology","Budgeting",
				"Business Administration","Business (School of)","Camp Abilities","Campus Recreation","Career Services","CELT",
				"Chemistry and Biochemistry","College Communications","Communication","Community Development","Computational Science",
				"Computer Science","Counseling Center","Counselor Education","Criminal Justice","Dance","Design and Production",
				"Development Office","Earth Sciences","Education and Human Development","Education and Human Services (School of)",
				"Educational Administration","Enrollment Mgt & Student Affairs","Environmental Health and Safety",
				"Environmental Science & Biology","EOC Academic Preparation Dept","EOC Administration","EOC Bridge Program",
				"EOC Business Affairs","EOC Business & Info Technology","EOC Career Srvs & SUNY Outreach","EOC College Connection",
				"EOC Community Relations","EOC Cosmetology","EOC Counseling & Student Life","EOC Culinary Arts","EOC Early Childhood Education",
				"EOC Enrollment Mgmt Support Group","EOC Health Care","EOC Information Technology","EOC Library","EOC Maintenance",
				"EOC Partnership & Collaboration","EOC Registrar","EOC Security & Safety","Facilities Administration","Facilities Alterations",
				"Facilities Automotive","Facilities Custodial","Facilities Grounds","Facilities Mail Services","Facilities Moving/Truck",
				"Facilities Planning","Facilities Property Control","Facilities Utilities","Facilities Zones","Finance and Management"
		};


	public static String title [] = {
			"Account Collector","Accounting Clerk","Administrative Assistant","Administrative Coordinator",
			"Administrative Director","Administrative Manager","Administrator","Assistant Director","Auditing Clerk",
			"Bill Collector","Billing Clerk","Billing Coordinator","Bookkeeper","Client Relations Manager",
			"Contract Administrator","Credit Clerk","Data Entry","Executive Assistant","Distribution Sales Representative",
			"District Sales Manager","Enterprise Resources Planning Representative","Enterprise Sales Representative",
			"Equipment Sales Specialist","Executive Vice President, Sales","Financial Advisor","Financial Planner",
			"Financial Sales Assistant","Fixed Income Specialist","Franchise Development Manager",
			"Group and Events Sales Coordinator","Group Sales Manager","Healthcare Sales Representative",
			"Industrial Sales Representative","Industry Representative","Inside Sales Manager","Inside Salesperson",
			"Insurance Sales Representative","Investments Representative","Key Account Manager","Major Accounts Manager",
			"Manager, Business Development","Market Development Manager"

	};

	public static String getTitle() {
		String Jobtitle = (title[new Random().nextInt(title.length)]);

		return Jobtitle;

	}

	public static String getDept()
	{

		String dep = (dept[new Random().nextInt(dept.length)]);

		return dep;

	}


	public static String cityName()
	{

		String fullCity = (city[new Random().nextInt(city.length)]);
		String fcity = fullCity.substring(0,1).toUpperCase();
		String restCity = fullCity.substring(1).toLowerCase();

		return fcity + restCity;

	}

	public static String getFirstName()
	{
		String firstName = (fname[new Random().nextInt(fname.length)]);
		String firstLetter = firstName.substring(0,1).toUpperCase();
		String restLetters = firstName.substring(1).toLowerCase();

		return firstLetter + restLetters;
	}

	public static void WriteTOaFile(String fileName, ArrayList str) throws IOException
	{
		BufferedWriter writer = new BufferedWriter(new FileWriter(fileName));

		for (int i =0; i < str.size(); i++)
		{
			writer.write(str.get(i).toString()+"\n");
			//System.out.println(str.get(i).toString()+"\n");
			// saves after clearing the existing 
		}

		writer.close();
	}


	public static String getlastName()
	{
		String lastName = (lname[new Random().nextInt(lname.length)]);
		String firstLetter = lastName.substring(0,1).toUpperCase();
		String restLetters = lastName.substring(1).toLowerCase();

		return firstLetter + restLetters;
	}




	public static String getCompanyName()
	{
		String fullCity = (city[new Random().nextInt(city.length)]);

		return fullCity+ZipCode()+"TestCompany";
	}


	public static String getDomaninName()
	{


		return getFirstName().toLowerCase()+ZipCode()+"Test.com";
	}


	public static String getemail()
	{
		String fnam = getFirstName();
		String firstLetter = fnam.substring(0, 1).toLowerCase();
		String lnam = getlastName();
		String emailSignUp = firstLetter+lnam.toLowerCase()+dateString()+"@mailinator.com" ;

		return emailSignUp;
	}


	public static String dateString()
	{
		java.util.Date date = Calendar.getInstance().getTime();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		String year = ""+cal.get(Calendar.YEAR);
		String month = ""+cal.get(Calendar.MONTH);
		String day = ""+cal.get(Calendar.DAY_OF_MONTH);
		String time = ""+cal.getTimeInMillis();

		String uniqueEle = time.substring(10).toString();


		//System.out.println(uniqueEle);


		return uniqueEle;
	}


	public static String phoneNumber() 
	{
		java.util.Date date = Calendar.getInstance().getTime();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		String year = ""+cal.get(Calendar.YEAR);
		String month = ""+cal.get(Calendar.MONTH);
		String day = ""+cal.get(Calendar.DAY_OF_MONTH);

		String time = ""+cal.getTimeInMillis();

		String uniqueEle = time.substring(3).toString();

		if (uniqueEle.startsWith("0"))
		{
			uniqueEle = uniqueEle.replace('0', '5');
		}


		//System.out.println(uniqueEle);


		return uniqueEle;
	}



	public static String ssnNumber() 
	{
		java.util.Date date = Calendar.getInstance().getTime();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		String year = ""+cal.get(Calendar.YEAR);
		String month = ""+cal.get(Calendar.MONTH);
		String day = ""+cal.get(Calendar.DAY_OF_MONTH);

		String time = ""+cal.getTimeInMillis();

		String uniqueEle = time.substring(4).toString();

		String designedSSn = uniqueEle.substring(0, 3)+"-"+uniqueEle.substring(3, 5)+"-"+uniqueEle.substring(5); // 453-45-4545
		//System.out.println(uniqueEle);


		// return uniqueEle;
		return designedSSn;
	}

	public static String eInNumber ()
	{
		java.util.Date date = Calendar.getInstance().getTime();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		String year = ""+cal.get(Calendar.YEAR);
		String month = ""+cal.get(Calendar.MONTH);
		String day = ""+cal.get(Calendar.DAY_OF_MONTH);

		String time = ""+cal.getTimeInMillis();

		String uniqueEle = time.substring(4).toString();

		String designedEIN = uniqueEle.substring(0, 2)+"-"+uniqueEle.substring(2, 9); //11-4499912
		//System.out.println(designedEIN );
		return designedEIN ;
	}



	public static String Address()
	{
		java.util.Date date = Calendar.getInstance().getTime();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		String year = ""+cal.get(Calendar.YEAR);
		String month = ""+cal.get(Calendar.MONTH);
		String day = ""+cal.get(Calendar.DAY_OF_MONTH);
		String time = ""+cal.getTimeInMillis();

		String uniqueEle = time.substring(9).toString();

		String addre = (address[new Random().nextInt(address.length)]);
		String statename = (state[new Random().nextInt(state.length)]);

		//String addres = uniqueEle + " Western Ave" +", West Hollywood"+", CA, " +  ZipCode();
		String addres = uniqueEle  +" "+addre+", "+ statename+" " +  ZipCode();

		//return addres;
		return uniqueEle+ " " +addre;
		//return statename;

		//return ZipCode();
	}

	public static String GetProperAddress()
	{
		java.util.Date date = Calendar.getInstance().getTime();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		String year = ""+cal.get(Calendar.YEAR);
		String month = ""+cal.get(Calendar.MONTH);
		String day = ""+cal.get(Calendar.DAY_OF_MONTH);
		String time = ""+cal.getTimeInMillis();

		String uniqueEle = time.substring(9).toString();

		String addre = (address[new Random().nextInt(address.length)]);
		String statename = (state[new Random().nextInt(state.length)]);

		//String addres = uniqueEle + " Western Ave" +", West Hollywood"+", CA, " +  ZipCode();
		String addres = uniqueEle  +" "+addre;

		//return addres;
		return uniqueEle+ " " +addre;
		//return statename;

		//return ZipCode();
	}


	public static String GetStateName()
	{

		String statename = (state[new Random().nextInt(state.length)]);


		//return addres;
		return statename;
		//return statename;

		//return ZipCode();
	}































	public static String todayDate ()
	{
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("MM/dd/yyyy");  
		LocalDate localDate = LocalDate.now();
		//System.out.println(dtf.format(localDate).toString()); //06/29/2017
		return dtf.format(localDate).toString();
	}

	public static int Getyear()
	{
		GregorianCalendar gc = new GregorianCalendar();

		int year = randBetween(2014, 2019);

		gc.set(gc.YEAR, year);


		return gc.get(gc.YEAR);

	}


	public static String getDateOfBirth ()
	{
		GregorianCalendar gc = new GregorianCalendar();

		int year = randBetween(1975, 1999);

		gc.set(gc.YEAR, year);

		int dayOfYear = randBetween(1, gc.getActualMaximum(gc.DAY_OF_YEAR));

		gc.set(gc.DAY_OF_YEAR, dayOfYear);

		// System.out.println(gc.get(gc.YEAR) + "-" + (gc.get(gc.MONTH) + 1) + "-" + gc.get(gc.DAY_OF_MONTH));

		// month
		int mo = (gc.get(gc.MONTH) + 1);
		// System.out.println(mo);
		int month =  Integer.toString(mo).length();
		String finalMo;

		if (month < 2)
			finalMo = "0"+Integer.toString(mo);
		else
			finalMo = Integer.toString(mo);

		// day

		int day1 = gc.get(gc.DAY_OF_MONTH);
		int day2 = Integer.toString(day1).length();
		String finalDay;

		if (day2 < 2)
			finalDay = "0"+Integer.toString(day1);
		else
			finalDay = Integer.toString(day1);


		String dateOfBirth = (finalMo + "/" + finalDay + "/" + gc.get(gc.YEAR)).toString();

		// System.out.println(dateOfBirth);

		return dateOfBirth;

	}


	public static String getDateOfBirthCommFormet ()
	{
		GregorianCalendar gc = new GregorianCalendar();

		int year = randBetween(1975, 1999);

		gc.set(gc.YEAR, year);

		int dayOfYear = randBetween(1, gc.getActualMaximum(gc.DAY_OF_YEAR));

		gc.set(gc.DAY_OF_YEAR, dayOfYear);

		// System.out.println(gc.get(gc.YEAR) + "-" + (gc.get(gc.MONTH) + 1) + "-" + gc.get(gc.DAY_OF_MONTH));

		// month
		int mo = (gc.get(gc.MONTH) + 1);
		// System.out.println(mo);
		int month =  Integer.toString(mo).length();
		String finalMo;

		if (month < 2)
			finalMo = "0"+Integer.toString(mo);
		else
			finalMo = Integer.toString(mo);

		// day

		int day1 = gc.get(gc.DAY_OF_MONTH);
		int day2 = Integer.toString(day1).length();
		String finalDay;

		if (day2 < 2)
			finalDay = "0"+Integer.toString(day1);
		else
			finalDay = Integer.toString(day1);


		//String dateOfBirth = (finalMo + "/" + finalDay + "/" + gc.get(gc.YEAR)).toString();

		String dateOfBirth = (gc.get(gc.YEAR)) + "," +finalMo + "," + finalDay.toString();

		// System.out.println(dateOfBirth);

		return dateOfBirth;

	}



	public static String getHireDate ()
	{
		GregorianCalendar gc = new GregorianCalendar();

		int year = randBetween(2015, 2019);

		gc.set(gc.YEAR, year);

		int dayOfYear = randBetween(1, gc.getActualMaximum(gc.DAY_OF_YEAR));

		gc.set(gc.DAY_OF_YEAR, dayOfYear);

		// System.out.println(gc.get(gc.YEAR) + "-" + (gc.get(gc.MONTH) + 1) + "-" + gc.get(gc.DAY_OF_MONTH));

		// month
		int mo = (gc.get(gc.MONTH) + 1);
		// System.out.println(mo);
		int month =  Integer.toString(mo).length();
		String finalMo;

		if (month < 2)
			finalMo = "0"+Integer.toString(mo);
		else
			finalMo = Integer.toString(mo);

		// day

		int day1 = gc.get(gc.DAY_OF_MONTH);
		int day2 = Integer.toString(day1).length();
		String finalDay;

		if (day2 < 2)
			finalDay = "0"+Integer.toString(day1);
		else
			finalDay = Integer.toString(day1);


		String dateOfBirth = (finalMo + "/" + finalDay + "/" + gc.get(gc.YEAR)).toString();

		// System.out.println(dateOfBirth);

		return dateOfBirth;

	}


	public static  int randBetween(int start, int end) {
		return start + (int)Math.round(Math.random() * (end - start));
	}




	public static String salayAmount [] ={
			"45220","41220","5022000","28220","122200","222200",
			"1100","69220","89220","4522","382","1222000",
			"12560","12300","56000","6620","12000","5522023",
			"892","6625","75225","22045","4023","922056"
	};

	public static String getSalaryAmount()
	{
		String amount = (salayAmount[new Random().nextInt(salayAmount.length)]);

		return amount;
	}




	public static String ZipCode()
	{
		java.util.Date date = Calendar.getInstance().getTime();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		String year = ""+cal.get(Calendar.YEAR);
		String month = ""+cal.get(Calendar.MONTH);
		String day = ""+cal.get(Calendar.DAY_OF_MONTH);
		String time = ""+cal.getTimeInMillis();

		String uniqueEle = time.substring(8).toString();


		//System.out.println(uniqueEle);


		return uniqueEle;

	}






	public static String clientName [] = {
			"Apple","Watermelon","Orange","Pear","Cherry","Strawberry",
			"Nectarine","Grape","Mango","Blueberry","Pomegranate","Carambola",
			"Plum","Banana","Raspberry","Mandarin","Jackfruit","Papaya","Kiwi",
			"Pineapple","Lime","Lemon","Apricot","Grapefruit","Melon","Coconut",
			"Avocado","Peach"

	};


	public static String getClientName() {
		String ClientNa = (clientName [new Random().nextInt(clientName.length)]);

		return ClientNa;

	}



}
