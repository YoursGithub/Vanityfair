<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ExportDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:export';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Export the entire database to db.sql file';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $mysqldumpPath = "C:\\xampp\\mysql\\bin\\mysqldump.exe";

        $database = config('database.connections.mysql.database');
        $username = config('database.connections.mysql.username');
        $password = config('database.connections.mysql.password');
        $host = config('database.connections.mysql.host');

        $filePath = base_path('db.sql');

        $command = "\"{$mysqldumpPath}\" --user={$username} --password={$password} --host={$host} {$database} > \"{$filePath}\"";

        shell_exec($command);

        if (file_exists($filePath)) {
            $this->info('Database export successful: ' . $filePath);
        } else {
            $this->error('Database export failed.');
        }
    }
}
