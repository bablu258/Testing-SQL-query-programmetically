
import java.text.SimpleDateFormat;
import java.util.Date;

public class simapleTest {

	public static void main(String[] args) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date(System.currentTimeMillis());
		
		String date2 = dateFormat.format(date);
		System.out.println(dateFormat.format(date));
		
		
		String insertSql = "INSERT INTO prescription VALUES ("+
				"'"+ 1+"'"+
				","+
				"'"+ 1+"'"+
				","+
				"'"+ 1+"'"+
				","+
				"'"+ 1+"'"+
				","+
				"null"+
				","+
				"'"+ 1+"'"+
				","+
				"'"+ 1+"'"+
				","+
				0+
				","+
				"null);";
		
		String UpdatetSql = "update prescription "+
				"set "+
				" PharmacyID = "+"sfsdf55656" +
				
				" ,orderFilled = "+ 1 +
				
				" ,DateOrderFilled = "+ "'"+"2015-12-12" +"'"+
				
				
				
				" where prescriptionID = "+ "'"+ 3453453 +"'"+
				";";
		
		
		System.out.println(UpdatetSql);

	}

}
