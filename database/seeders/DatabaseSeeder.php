<?php

namespace Database\Seeders;

use App\Models\Note;
use App\Models\Tag;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $users = collect([
            User::factory()->create([
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('password'),
            ]),
            User::factory()->create([
                'name' => 'user',
                'email' => 'user@gmail.com',
                'password' => Hash::make('password'),
            ]),
        ]);

        $users->each(function ($user) {
            $notes = Note::factory(100)->create(['user_id' => $user->id]);
            $tags = Tag::factory(rand(5, 10))->create(['user_id' => $user->id]);

            $notes->each(function ($note) use ($tags) {
                $note->tags()->attach($tags->random(rand(1, 3)));
            });
        });
    }
}
