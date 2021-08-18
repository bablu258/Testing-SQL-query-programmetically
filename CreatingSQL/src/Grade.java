import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.util.ArrayList;
import java.sql.*;

public class Grade {

	static final String DB_URL = "jdbc:mysql://localhost:3306/zagimore";
	static String user;
	static String password;
	static String schemaSql;
	static double totalPoint;
	static double generalDeductionPoint;
	static final boolean DEBUG = false;

	public static class Problem {
		String problemId;
		boolean isSelect;
		ArrayList<String> sql = new ArrayList<>();
	}

	public static ArrayList<Problem> problems = new ArrayList<>();
	public static ArrayList<Problem> students = new ArrayList<>();
	
	public static ArrayList<String> report = new ArrayList<>();

	public static void main(String[] args) throws IOException, InterruptedException, SQLException {
		
		
		
		
		String password = "Newlife@123";
		String solutionSql = "assignment2asolution.sql";
		schemaSql = "assignment_2a_schema.sql";
		totalPoint = 20;
		generalDeductionPoint = 2.5;
		
		
		
		
		
		
		String[] argsA = {"root",password,solutionSql,"fd"};
		
		File directoryPath = new File("allSQL");
	     StringBuilder str = new StringBuilder ();
	      String contents[] = directoryPath.list();
	      for(int i=0; i<contents.length; i++) {
	         //System.out.println(contents[i]);
	    	 if (i == (contents.length - 1))
	    		 str.append(contents[i]);
	    	 else
	    		 str.append(contents[i]+";");
	    		 
	      }
		
	      argsA[3]=str.toString();
		
		String  [] studentFiles =  argsA[3].split(";");
		
		for (int i= 0; i< studentFiles.length; i++ )
		{
			if (problems.size() > 0)
				problems.clear();
			if (students.size() > 0)
				students.clear();
			if (report.size() > 0)
				report.clear();
			
			argsA[3] = studentFiles[i];
			runALl (argsA);
		}
		
		
		
		
		
		
		
		
	}
	
	
	
	public static void runALl (String[] args) throws IOException, InterruptedException, SQLException
	{
		
		
		String fsolution;
		String fstudent;

		if (DEBUG) {
      user = "root";
      password = "password";
			fsolution = "solution.sql";
			fstudent = "student.sql";
		} else if (args.length != 4) {
			System.out.println("Incorrect number of arguments.");
			report.add("Incorrect number of arguments.\n");
			System.out.println("Arguments are userid password solution_file_name.sql  student_file.sql");
			report.add("Arguments are userid password solution_file_name.sql  student_file.sql"+"\n");
			//System.exit(0);
			return;
		} else {
      user = args[0];
      password = args[1];
			fsolution = args[2];
			fstudent = args[3];
		}


		readFile("solution//"+fsolution, problems);
		
		readFile("allSQL//"+fstudent, students);

		Connection conn = null;
		try {
			conn = java.sql.DriverManager.getConnection(DB_URL, user, password);
		} catch (SQLException ex) {
			System.out.println("***EXCEPTION*** " + ex.getMessage());
			report.add("***EXCEPTION*** " + ex.getMessage()+"\n");
			//System.exit(0);
		}
		
		System.out.println("Start of grading for " + fstudent);
		report.add("Start of grading for " + fstudent+"\n");
		
		// start create dataBase; drop if allready exist
		
		
		Statement stmt = null;
		stmt = conn.createStatement();
		StringBuilder sqlCo = new StringBuilder();
		
		   File myObj = new File("dataBase//"+schemaSql);
		      Scanner myReader = new Scanner(myObj);
		      while (myReader.hasNextLine()) {
		        String data = myReader.nextLine();
		        sqlCo.append(data+"\n");
		      }
		      myReader.close();
		
		
		
		
		String [] sql = sqlCo.toString().split(";");
		
		for (int i = 0; i < sql.length; i++ )
		{
			String finalQuery = sql[i].trim();
			//System.out.println(i+finalQuery);
			if (!finalQuery.equalsIgnoreCase(""))
				stmt.executeUpdate(finalQuery);
		}
	     
	     
	     

	     
	     
	     Thread.sleep(3333);
		// end
		
		

		System.out.println("Comparing files "); report.add("Comparing files "+"\n");
		System.out.println("solution: " + fsolution + " number of problems=" + problems.size()); 
		report.add("solution: " + fsolution + " number of problems=" + problems.size()+"\n");
		System.out.println("student : " + fstudent + " number of problems=" + students.size());
		report.add("student : " + fstudent + " number of problems=" + students.size()+"\n");
		System.out.println();
		report.add("\n");

		if (problems.size() != students.size()) {
			System.out.println("*** Student file size is incorrect.");
			report.add("*** Student file size is incorrect."+"\n");

			//System.exit(0);
		}

		for (int k = 0; k < problems.size(); k++) {
			try {
				Problem p = problems.get(k);
				Problem ps = students.get(k);

				System.out.println(p.problemId+"\n");
				execProblem(conn, p, ps);
				System.out.println();
				report.add("\n");

			} catch (Exception e) {
				System.out.println("***EXCEPTION*** " + e.getMessage());
				report.add("***EXCEPTION*** " + e.getMessage()+"\n");
			}

		}

		try {
			conn.close();
		} catch (SQLException ex) {

		}
		
		

		System.out.println("End of grading for " + fstudent+"\n");
		report.add("End of grading for " + fstudent+"\n");
		
		createOuput(fstudent);
		
		
		
	}
	
	
	public static void createOuput (String fstudent) throws IOException, InterruptedException
	{
		String noteTxt = fstudent+".txt";
		File myObj = new File("allSQL//"+noteTxt);
		myObj.createNewFile();
		Thread.sleep(3333);
		
		 FileWriter myWriter = new FileWriter("allSQL//"+noteTxt);
		 
		 for (int i = 0; i < report.size(); i++)
			{
			 myWriter.write(report.get(i));
			}
		 
		 myWriter.write("\n\n ********* \n\n");
		 
		 double count = 0;
		 for (int i = 0; i < report.size(); i++)
			{
			 String exception = report.get(i);
			 if (exception.startsWith("***"))
			 {
				 if (!exception.contains("END Reply"))
				 {
					 
					 
					 if (exception.contains("Student file size is incorrect"))
					 {
						 myWriter.write(report.get(i));
						 count = totalPoint;
					 }
					 
					 else
					 {
						 myWriter.write(report.get(i));
						 count = count + generalDeductionPoint;
					 }
					 
					 
					 
					
				 }
					 
			 }
			 	
			}
		 
		 myWriter.write("\n\n -------- \n\n");
		 
		 myWriter.write("Total point is "+totalPoint+" and deducted point is "+ count + " So your point is "+ (totalPoint -count));
		 
		 myWriter.close();
		 report.clear();
	}

	public static void execProblem(Connection conn, Problem problem, Problem student) throws SQLException {

		Statement sqlstmt1 = conn.createStatement();
		Statement sqlstmt2 = conn.createStatement();
		if (problem.isSelect) {
			// a select statement. Execute both solution and students response.
			// compare result sets.
			String sql1 = null;
			String sql2 = null;
			System.out.println("Solution sql:"+"\n");
			report.add("Solution sql:"+"\n");
			for (String s : problem.sql) {
				System.out.println(s+"\n");
				report.add(s+"\n");
				if (sql1 == null)
					sql1 = s;
				else
					sql1 = sql1 + " " + s;
			}
			System.out.println("Student sql:");
			report.add("Student sql:"+"\n");
			for (String s : student.sql) {
				System.out.println(s);
				report.add(s+"\n");
				if (sql2 == null)
					sql2 = s;
				else
					sql2 = sql2 + " " + s;
			}
			try {

				ResultSet rs1 = sqlstmt1.executeQuery(sql1);
				ResultSet rs2 = sqlstmt2.executeQuery(sql2);
				compareResultSets(rs1, rs2);

			} catch (SQLException e) {
				System.out.println("***EXCEPTION*** " + e.getMessage());
				report.add("***EXCEPTION*** " + e.getMessage()+"\n");
			}
		} else {
			// not a select statement. Execute student's statements.
			for (int first = 0; first < student.sql.size(); first++) {
				String sql = null;
				System.out.println("Students sql:");
				report.add("Students sql:"+"\n");
				for (int last = first; last < student.sql.size(); last++) {
					System.out.println(student.sql.get(last));
					report.add(student.sql.get(last)+"\n");
					if (sql == null)
						sql = student.sql.get(last);
					else
						sql = sql + " " + student.sql.get(last);
					if (student.sql.get(last).endsWith(";")) {
						first = last;
						break;
					}
				}
				try {
					int rc = sqlstmt2.executeUpdate(sql);
					System.out.println("return value = " + rc);
					report.add("return value = " + rc+"\n");
				} catch (SQLException e) {
					System.out.println("***EXCEPTION*** " + e.getMessage());
					report.add("***EXCEPTION*** " + e.getMessage()+"\n");
				}
			}
		}
		sqlstmt1.close();
		sqlstmt2.close();
	}

	public static void printResultSet(ResultSet rs) throws SQLException {
		int ncols = rs.getMetaData().getColumnCount();
		for (int i = 1; i <= ncols; i++) {
			System.out.print("\t" + rs.getMetaData().getColumnName(i));
			report.add("\t" + rs.getMetaData().getColumnName(i)+"\n");
		}
		System.out.println();
		report.add("\n");
		while (rs.next()) {
			for (int i = 1; i <= ncols; i++) {
				System.out.print("\t" + rs.getObject(i).toString());
				report.add("\t" + rs.getObject(i).toString()+"\n");
			}
			System.out.println();
			report.add("\n");

		}
	}

	public static int compareResultSets(ResultSet rs1, ResultSet rs2) throws SQLException {
		// compare number of columns and column names
		int ncols = rs1.getMetaData().getColumnCount();
		int ncols2 = rs2.getMetaData().getColumnCount();
		if (ncols != ncols2) {
			System.out.println("*** Columns counts do not agree.  expected columns=" + ncols + " actual columns=" + ncols2);
			report.add("*** Columns counts do not agree.  expected columns=" + ncols + " actual columns=" + ncols2+"\n");
		}
		
		ncols = Math.min(ncols, ncols2);
		for (int i = 1; i <= ncols; i++) {
			if (!rs1.getMetaData().getColumnName(i).toLowerCase().contentEquals(rs2.getMetaData().getColumnName(i).toLowerCase())) {
				System.out.println("*** Columns names do not agree.  expected =" + rs1.getMetaData().getColumnName(i)
						+ " actual =" + rs2.getMetaData().getColumnName(i));
				
				report.add("*** Columns names do not agree.  expected =" + rs1.getMetaData().getColumnName(i)
						+ " actual =" + rs2.getMetaData().getColumnName(i)+"\n");
			}
		}
		
		int nrow = 0;
		int nerrors = 0;
		boolean next1 = rs1.next();
		boolean next2 = rs2.next();
		while (next1 && next2 && nerrors == 0) {
			nrow++;
			for (int i = 1; i <= ncols; i++) {
				if (!rs1.getObject(i).equals(rs2.getObject(i))) {
					System.out.println("*** Results Sets do not agree.  row=" + nrow);
					report.add("*** Results Sets do not agree.  row=" + nrow+"\n");
					System.out.print(" expected=");
					report.add(" expected= ");
					for (int k=1; k <= ncols; k++)
						{
						System.out.print(rs1.getObject(k)+" ");
						report.add(rs1.getObject(k)+" ");
						}
					System.out.println();
					report.add("\n");
					System.out.print(" actual=");
					report.add(" actual=");
					for (int k=1; k <= ncols; k++) 
					{
						System.out.print(rs2.getObject(k)+" ");
						report.add(rs2.getObject(k)+" ");
					}
						
					System.out.println(); report.add("\n");
					nerrors++;
					break;
				}
			}
			if (nerrors == 0) {
				next1 = rs1.next();
				next2 = rs2.next();
			}
		}
		if (nerrors == 0 && next1 != next2) {
			// number of rows unequal
			if (next1) {
				System.out.println("*** Results Sets do not agree.  Too few rows.");
				report.add("*** Results Sets do not agree.  Too few rows."+"\n");
				nerrors++;
			} else {
				System.out.println("*** Results Sets do not agree.  Too many rows.");
				report.add("*** Results Sets do not agree.  Too many rows."+"\n");
				nerrors++;
			}

		}
		return nerrors;
	}

	public static void readFile(String filename, ArrayList<Problem> problems) {

		Problem curProblem = null;
		int lineno = 0;

		try {
			Scanner scSolution = new Scanner(new File(filename));
			while (scSolution.hasNext()) {
				String line = scSolution.nextLine().trim();
				lineno++;
				if (line.length() == 0)
					continue; // ignore blank line
				if (line.length() >= 4 && line.substring(0, 3).equals("-- ") && line.charAt(3) >= '0'
						&& line.charAt(3) <= '9') {
					// problem number
					curProblem = new Problem();
					curProblem.problemId = line.substring(3);
					problems.add(curProblem);
					continue;
				}
				if (line.startsWith("--")) {
					continue; // comment line, ignore it.
				}
				// must be SQL
				if (curProblem.sql.size() == 0 && (line.startsWith("select")||line.startsWith("SELECT")))
					curProblem.isSelect = true;
				curProblem.sql.add(line);
			}
			scSolution.close();
		} catch (Exception e) {
			System.out.println("***EXCEPTION*** " + "Something is wrong at line no " + lineno + " file " + filename);
			report.add("***EXCEPTION*** " + "Something is wrong at line no " + lineno + " file " + filename+"\n");
			System.out.println(e.getMessage());
			report.add(e.getMessage()+"\n");
			//System.exit(0);
		}
	}

}
