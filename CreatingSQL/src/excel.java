import java.io.File;  
import java.io.FileInputStream;  
import java.io.IOException;
import java.util.Iterator;

import org.apache.poi.hssf.usermodel.HSSFSheet;  
import org.apache.poi.hssf.usermodel.HSSFWorkbook;  
import org.apache.poi.ss.usermodel.Cell;  
import org.apache.poi.ss.usermodel.FormulaEvaluator;  
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;  
public class excel  
{  
	public static void main(String args[]) throws IOException  
	{  
		//obtaining input bytes from a file  
		//FileInputStream fis=new FileInputStream(new File("grader.xlsx"));  

		
		 File myFile = new File("grader.xlsx");
         FileInputStream fis = new FileInputStream(myFile);

         // Finds the workbook instance for XLSX file
         XSSFWorkbook myWorkBook = new XSSFWorkbook (fis);
        
         // Return first sheet from the XLSX workbook
         XSSFSheet mySheet = myWorkBook.getSheetAt(0);
        
         // Get iterator to all the rows in current sheet
         Iterator rowIterator = mySheet.iterator();
        
         // Traversing over each row of XLSX file
         while (rowIterator.hasNext()) {
             Row row =  (Row) rowIterator.next();

             // For each row, iterate through each columns
             Iterator cellIterator = row.cellIterator();
             while (cellIterator.hasNext()) {

                 Cell cell =  (Cell) cellIterator.next();

                 switch (cell.getCellType()) {
                 case Cell.CELL_TYPE_STRING:
                     System.out.print(cell.getStringCellValue() + "\t");
                     break;
                 case Cell.CELL_TYPE_NUMERIC:
                     System.out.print(cell.getNumericCellValue() + "\t");
                     break;
                 case Cell.CELL_TYPE_BOOLEAN:
                     System.out.print(cell.getBooleanCellValue() + "\t");
                     break;
                 default :
              
                 }
             }
             System.out.println("");
         }
		
		
		
		
		
	}  
}  