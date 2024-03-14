<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            // [
            //     'name' => 'Admin',
            //     'email' => 'admin@gmail.com',
            //     'password' => bcrypt('1234'),
            //     'status' => 'active',
            //     'role' => 'admin'
            // ],
            // [
            //     'name' => 'User',
            //     'email' => 'user@gmail.com',
            //     'password' => bcrypt('1234'),
            //     'status' => 'inactive',
            //     'role' => 'customer'
            // ]
                'name' => Str::random(10),
                'email' => Str::random(10).'@example.com',
                'password' => Hash::make('password'),
                'status' => Arr::random(['active', 'inactive']),
                'role' => Arr::random(['admin', 'customer']),
            ]);
    }
}
