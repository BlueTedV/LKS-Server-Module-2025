<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Models\Society;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'id_card_number' => 'required|string',
            'password' => 'required|string',
        ]);

        $society = Society::where('id_card_number', $request->id_card_number)->first();

        if (! $society || ! Hash::check($request->password, $society->password)) {
            throw ValidationException::withMessages([
                'id_card_number' => ['ID Card Number or Password incorrect'],
            ]);
        }

        $token = $society->createToken('auth-token')->plainTextToken;

        return response()->json([
            'name' => $society->name,
            'born_date' => date('Y-m-d', strtotime($society->born_date)),
            'gender' => $society->gender,
            'address' => $society->address,
            'token' => $token,
            'regional' => [
                'id' => $society->regional->id,
                'province' => $society->regional->province,
                'district' => $society->regional->district,
            ]
        ], 200);
    }
}