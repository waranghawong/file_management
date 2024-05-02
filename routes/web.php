<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminPanel\AdminController;
use App\Http\Controllers\AdminPanel\UsersController;
use App\Http\Controllers\CustomerPanel\CustomerController;
use App\Http\Controllers\FilesController;
use App\Http\Controllers\PmrController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::middleware(['auth', 'role:admin'])->group(function () {

    Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('admin/upload', [FilesController::class, 'index'])->name('admin.upload'); 
    Route::get('admin/users', [UsersController::class, 'index'])->name('users');
    Route::get('admin/users/new', [UsersController::class, 'create'])->name('users.new');
    Route::post('admin/users/create', [UsersController::class, 'store'])->name('users.store');
    Route::get('admin/users/{userprofile}', [UsersController::class, 'edit'])->name('users.edit');
    Route::patch('admin/users/{id}', [UsersController::class, 'update'])->name('users.update');
    Route::post('uploadfile', [FilesController::class, 'addFiles'])->name('uploadfile');
    Route::get('edit_file_info/{id}', [FilesController::class, 'edit'])->name('edit_file_info');
    Route::get('/pmr', [PmrController::class, 'index'])->name('pmr');
    Route::post('submit_pmr', [PmrController::class, 'store'])->name('submit_pmr');

    Route::get('view_pdf/{id}', [FilesController::class, 'viewpdf'])->name('view_pdf');

});

Route::middleware(['auth', 'role:customer'])->group(function () {
    Route::get('customer/dashboard', [CustomerController::class, 'index'])->name('customer.dashboard');
});
