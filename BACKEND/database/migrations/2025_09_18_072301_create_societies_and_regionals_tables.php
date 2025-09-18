<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('regionals', function (Blueprint $table) {
            $table->id();
            $table->string('province');
            $table->string('district');
            $table->timestamps();
        });

        Schema::create('societies', function (Blueprint $table) {
            $table->id();
            $table->string('id_card_number')->unique();
            $table->string('password');
            $table->string('name');
            $table->date('born_date');
            $table->enum('gender', ['male', 'female']);
            $table->text('address');
            $table->foreignId('regional_id')->constrained('regionals');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('societies');
        Schema::dropIfExists('regionals');
    }
};