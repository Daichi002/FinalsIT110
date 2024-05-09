<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\User;
use App\Models\Receipt;
use App\Models\Receiptlog;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;


class Onlineshop extends Controller
{
    public function create(Request $request)
{
    $email = $request->input('email');
    $userName = $request->input('username');
    $password = $request->input('password');

    // Use the Hash facade to hash the password
    $hashedPassword = Hash::make($password);

    // Insert data into the 'accounts' table using Eloquent
    $account = new Account;  
    $account->email = $email;
    $account->user_name = $userName;
    $account->password = $hashedPassword;

    try {
        // Attempt to save the account
        $account->save();
    } catch (\Exception $e) {
        // Handle the exception (e.g., log it) and return an error response
        return response()->json(['error' => 'Account creation failed'], 500);
    }

    // Registration was successful
    return response()->json(['message' => 'Account has been created'], 200);
}


    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        // Retrieve the hashed password from the 'accounts' table using Eloquent
        $user = Account::where('email', $email)->first();

        if (!$user || !Hash::check($password, $user->password)) {
            return response()->json(['message' => 'Invalid Email or password'], 401);
        } else {
            return response()->json(['success' => true, 'user' => $user])
                ->header('Content-Type', 'application/json');
        }
    }
    

                public function details(Request $request)
                    {
                        try {
                            // Validate the input data
                            $validator = Validator::make($request->all(), [
                                'firstname' => 'required|string',
                                'lastname' => 'required|string',
                                'username' => 'required|string',
                                'country' => 'required|string',
                                'city' => 'required|string',
                                'province' => 'required|string',
                                'zip' => 'required|string',
                                'number' => 'required|string',
                            ]);

                            // Check if validation fails
                            if ($validator->fails()) {
                                return response()->json(['success' => false, 'message' => $validator->errors()], 400);
                            }

                            // Count the number of records with isused = true for the specified username
                            $isUsedCount = User::where('username', $request->input('username'))
                            ->where('isused', true)
                            ->count();

                            // Check if the count of true isused exceeds the maximum limit (e.g., 5)
                            if ($isUsedCount >= 5) {
                            return response()->json(['success' => false, 'message' => 'Maximum user details limit reached for isused'], 400);
                            }


                            // Insert data into the 'users' table using Eloquent
                            User::create([
                                'firstname' => $request->input('firstname'),
                                'lastname' => $request->input('lastname'),
                                'username' => $request->input('username'),
                                'country' => $request->input('country'),
                                'city' => $request->input('city'),
                                'province' => $request->input('province'),
                                'zip' => $request->input('zip'),
                                'ph_number' => $request->input('number'),
                            ]);

                            // Registration was successful
                            return response()->json(['success' => true, 'message' => 'Details successfully saved'], 200);
                        } catch (\Exception $exception) {
                            // Log the exception for debugging purposes
                            Log::error("An error occurred during user details insertion: " . $exception->getMessage());

                            // Return a generic error response
                            return response()->json(['success' => false, 'message' => 'An error occurred during user details insertion'], 500);
                        }
                    }

                    public function geteditDetails(Request $request)
                        {
                            $userId = $request->input('selectedUserId');

                            if (!is_numeric($userId) || $userId <= 0) {
                                
                                return response()->json(['success' => false, 'message' => 'Invalid user ID', 'userId' => $userId], 400);
                            }

                            // Check if the user ID is provided
                            if (!$userId) {
                                return response()->json(['message' => 'User ID not provided']);
                            }

                            // Retrieve the user from the 'users' table using Eloquent
                            $user = User::find($userId);

                            // Check if the user exists
                            if (!$user) {
                                return response()->json(['message' => 'User not found']);
                            }

                            // Return the user details
                            return response()->json(['message' => 'User details', 'user' => $user], 200);
                        }

        
                    




                        public function updateUserDetails(Request $request, $userid, $username)
                        {
                            try {
                                $user = User::where('id', $userid)->where('username', $username)->firstOrFail();
                                $user->update($request->all());
                                return response()->json($user, 200);
                            } catch (ModelNotFoundException $exception) {
                                // If user is not found, return a response indicating that
                                return response()->json(['message' => 'User not found'], 404);
                            }
                        }
                        



                public function deleteuser(Request $request)
                        {
                            try {
                                $userId = $request->input('selectedUserId');

                                // Validate the input
                                if (!is_numeric($userId) || $userId <= 0) {
                                    return response()->json(['success' => false, 'message' => 'Invalid user ID'], 400);
                                }

                                // Call the stored procedure using the DB facade
                                DB::select('CALL deactivate_user(:p_user_id)', ['p_user_id' => $userId]);

                                // Return a success response
                                return response()->json(['success' => true, 'message' => 'User details deleted successfully'], 200);
                            } catch (\Exception $exception) {
                                // Log the exception for debugging purposes
                                Log::error("An error occurred during stored procedure execution: " . $exception->getMessage());

                                // Return a generic error response
                                return response()->json(['success' => false, 'message' => 'An error occurred during deletion'], 500);
                            }
                        }


            public function getdetails(Request $request)
            {
                $username = $request->input('username');

                // Retrieve the user from the 'users' table using Eloquent
                $user = User::where('username', $username)
                            ->where('isactive', true)
                            ->where('isused', true)
                            ->first();

                if (!$user) {
                    // Handle the case where the user with the given username is not found or is not used
                    return response()->json(['message' => 'User not found or not used'], 404);
                }

                // Return the user details
                return response()->json(['message' => 'Order will be Delivered to:', 'user' => $user], 200);
            }


            public function isused(Request $request)
                {
                    $username = $request->input('username');
                    
                    // Call stored procedure to get user details
                    $result = DB::select("CALL GetUserDetailsByUsernameAndIsUsedProcedure(?)", [$username]);
                    
                    // Extract user details from the result
                    $userDetails = json_decode($result[0]->user_details);

                    // Check if user details array is empty or if it contains a message
                    if (empty($userDetails) || isset($userDetails->message)) {
                        // Handle the case where no used users are found
                        return response()->json(['message' => 'No used users found']);
                    }

                    // Return the user details array
                    return response()->json(['message' => 'Used details', 'users' => $userDetails], 200);
                }


            

                public function active(Request $request)
                {
                  
                        $userId = $request->input('selectedUserId');
                
                        // Validate the input
                        if (!is_numeric($userId) || $userId <= 0) {
                            return response()->json(['success' => false, 'message' => 'Invalid user ID'], 400);
                        }
                
                        // Call the stored procedure using the DB facade
                        $result = DB::select('CALL ActivateUser(:p_user_id)', ['p_user_id' => $userId]);
                        
                        // Check if the procedure returned any result
                        if (!empty($result)) {
                            // Procedure executed successfully
                            return response()->json(['success' => true, 'message' => 'User detail is now active'], 200);
                        } else {
                            // Procedure failed to execute
                            return response()->json(['success' => false, 'message' => 'Failed to activate user']);
                        }
                  
                }
                

                

            


        

        public function receipt(Request $request)
        {
    
            try {
                // Retrieve user ID and car ID from the request
                $userId = $request->input('userId');
                $carId = $request->input('carId');
    
                // Save the association in the 'receipts' table
                $receipt = new Receipt();
                $receipt->user_id = $userId;
                $receipt->car_id = $carId;
                $receipt->save();
    
                // Return a response indicating success
                return response()->json(['message' => 'Transaction successfully']);
            } catch (\Exception $e) {
                // Debugging statement
                return response()->json(['error' => 'Error: Caught an exception - ' . $e->getMessage()]);
            }
        }


        public function receiptlog(Request $request)
        {
            try {
                $username = $request->input('username');
        
                // Call the stored procedure using the DB facade
                $results = DB::select('CALL receiptlog(:username)', ['username' => $username]);
        
                // Process and return the results as needed
                return response()->json($results);
            } catch (\Exception $exception) {
                // Log the exception for debugging purposes
                Log::error("An error occurred during receipt log retrieval: " . $exception->getMessage());
        
                // Return a generic error response
                return response()->json(['success' => false, 'message' => 'An error occurred during receipt log retrieval']);
            }
        }
        


}
