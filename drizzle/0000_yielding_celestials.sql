CREATE TABLE `accounts` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`type` text DEFAULT 'DEBIT',
	`amount` integer DEFAULT 0,
	`outstanding_balance` integer,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` integer PRIMARY KEY NOT NULL,
	`account_id` integer NOT NULL,
	`type` text DEFAULT 'EXPENSE',
	`amount` integer NOT NULL,
	`transaction_date` text NOT NULL,
	`category_id` integer,
	`to_account_id` integer,
	`description` text,
	FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`to_account_id`) REFERENCES `accounts`(`id`) ON UPDATE no action ON DELETE no action
);
