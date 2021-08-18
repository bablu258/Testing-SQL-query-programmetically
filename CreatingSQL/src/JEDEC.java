import java.lang.Math;
import java.math.BigDecimal;
public class JEDEC {

	public static void main(String[] args) {
		
		
		/*
		 * JEDEC
		 * 1 Byte is equal to 8 bits 
		 * 1 Kilobyte(KB) is equal to 1024 Bytes 
		 * 1 Megabyte(MB) is equal to 1024 Kilobytes 
		 * 1 Gigabyte(GB) is equal to 1024 Megabytes
		 * 1 Terabyte(TB) is equal to 1024 Gigabytes 
		 * 1 Petabyte(PB) is equal to 1024 Terabytes.
		 */
		
		/*
		 * SI
		 * 1 Byte is equal to 8 bits 
		 * 1 Kilobyte(KB) is equal to 10^3 Bytes 
		 * 1 Megabyte(MB) is equal to 10^6  Kilobytes 
		 * 1 Gigabyte(GB) is equal to 10^9  Megabytes
		 * 1 Terabyte(TB) is equal to 10^13  Gigabytes etc
		 */
		
		
		
		// for SI

		int num = 10;

		double Kilo = Math.pow(num, 3);
		double Mega = Math.pow(num, 6);
		double Giga =  Math.pow(num, 9);
		double Tera =  Math.pow(num, 12);

		System.out.println(sendLargeNumber(Kilo));
		System.out.println( sendLargeNumber(Mega)  );
		System.out.println(sendLargeNumber(Giga));
		System.out.println(sendLargeNumber(Tera));
		
		
		
		
		

		// use number less than 1999901221
		//frombytesToGBMBKB (999901221);

		fromKBtobytesGBMB(5656);






	}
	
	
	
	
	
	
	
	


	public static void frombytesToGBMBKB (double bytesNum)

	{
		//double size_bytes=1999901221;
		
		double size_bytes=bytesNum;
		String cnt_size;

		double size_kb = size_bytes /1024;
		double size_mb = size_kb / 1024;
		double size_gb = size_mb / 1024 ;

		

		cnt_size = sendLargeNumber (size_gb) + " GB";
		System.out.println("Converted Size: " +  cnt_size );

		cnt_size = sendLargeNumber (size_mb)  + " MB";
		System.out.println("Converted Size: " + cnt_size);

		cnt_size = sendLargeNumber (size_kb)   + " KB";
		System.out.println("Converted Size: " + cnt_size);
	}
	
	public static void fromKBtobytesGBMB (double KBNum)

	{
		//double size_bytes=1999901221;
		
		double size_KB=KBNum;
		String cnt_size;

		double size_bit = size_KB  * 1024 * 8;
		double size_byte = size_KB  * 1024;
		double size_gb = size_KB / 1024 ;

		

		cnt_size = sendLargeNumber (size_gb) + " GB";
		System.out.println("Converted Size: " +  cnt_size );

		cnt_size = sendLargeNumber (size_byte)  + " Bytes";
		System.out.println("Converted Size: " + cnt_size);

		cnt_size = sendLargeNumber (size_bit)   + " bit";
		System.out.println("Converted Size: " + cnt_size);
	}
	
	
	
	

	public static BigDecimal sendLargeNumber (double num )
	{
		BigDecimal  reallyBig = new BigDecimal (num);

		return reallyBig;
	}

}
