<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Files>
 */
class FilesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => rand(1,2),
            'file_name' => Arr::random(['asd','asggag', 'sdfawef', 'jrpojgoir', ';lhklrjktih']),
            'file_path' => 'files/riON79pzXuRvN4T2F79vXxBIG4uYNFPmrypvtjVU.png',
            'description' => 'asdfasfsdfasdf',
            'status' => '1',
        ];
    }
}
