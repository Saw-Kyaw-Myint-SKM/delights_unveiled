<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request to Change Producer Role</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .email-container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 20px auto;
        }

        .email-header {
            background-color: #007bff;
            color: #ffffff;
            padding: 15px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }

        .email-body {
            padding: 20px;
            line-height: 1.6;
            color: #333;
        }

        .email-footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #888888;
            border-top: 1px solid #e0e0e0;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #28a745;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            text-align: center;
        }

        .button:hover {
            background-color: #218838;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="email-header">
            <h2>Request to Change Producer Role</h2>
        </div>
        <div class="email-body">
            <p><strong>From:</strong> {{ $email }}</p>
            <p>{{ $description }}</p>
        </div>
        <div class="email-footer">
            <p>This email was sent from your website. Please do not reply directly to this email.</p>
        </div>
    </div>
</body>

</html>
